import { client } from '../../database/prismaClient.js';
import { Unit } from '@prisma/client';
import { itemInputSchema } from './item.zod.js';
import { Item } from './item.model.js';
import { Prisma } from '@prisma/client';
import { UserInputError } from '../../graphql/customError.js';

// Service for managing Item entities, including CRUD operations and soft deletion.
export class ItemService {
  /**
   * Retrieve a single item by its unique ID.
   * @param id - The unique identifier of the item.
   * @returns The item object or null if not found.
   */
  static async getItemById(id: number): Promise<Item | null> {
    return await client.item.findFirst({
      where: { 
        id:id,
        isDeleted: false
      },
    });
  }

  /**
   * Retrieve all items from the database.
   * @returns An array of all item objects.
   */
  static async getAllItems(): Promise<Item[]> {
    return await client.item.findMany({
      where: {
        isDeleted: false
      }
    });
  }

  /**
   * Create a new item after validating input.
   * @param input - The item data to create.
   * @returns The created item object.
   * @throws Error if validation fails.
   */
  static async createItem(input: {
    skuCode: string;
    name: string;
    unit: Unit;
    description: string | null;
    price: number;
  }): Promise<Item> {
    const parsedInput = itemInputSchema.safeParse(input);
    if (!parsedInput.success) {
      throw new Error(parsedInput.error.errors[0].message);
    }

    try {
      return await client.item.create({
        data: input,
      });
    } catch (error) {
      if( error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new UserInputError('SKU code must be unique');
        }
      }
      throw error; // Re-throw other errors
    }
    
  }

  /**
   * Update an existing item with partial input.
   * @param id - The unique identifier of the item to update.
   * @param input - Partial item data to update.
   * @returns The updated item object.
   * @throws Error if validation fails.
   */
  static async updateItem(
    id: number,
    input: Partial<{
      skuCode: string;
      name: string;
      unit: Unit;
      description: string | null;
      price: number;
    }>,
  ): Promise<Item> {

    const parsedInput = itemInputSchema.partial().safeParse(input);
    if (!parsedInput.success) {
      throw new Error(parsedInput.error.errors[0].message);
    }
    
    try {
     return await client.item.update({
        where: { id },
        data: input,
      }); 
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new UserInputError('SKU code duplicated');
        }
      }
      throw error; // Re-throw other errors
      
    }
  }

  /**
   * Soft delete an item by setting isDeleted and isActive flags.
   * @param id - The unique identifier of the item to delete.
   * @param isDeleted - Flag to mark item as deleted (default: true).
   * @param isActive - Flag to mark item as active (default: false).
   * @returns The updated item object.
   */
  static async deleteItem(
    id: number,
    isDeleted: boolean = true,
    isActive: boolean = false,
  ): Promise<Item> {
    return await client.item.update({
      where: { id },
      data: {
        isDeleted,
        isActive,
      },
    });
  }
}
