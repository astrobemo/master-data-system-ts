import { client } from '../../database/prismaClient.js';
import { Unit } from '@prisma/client';
import { itemInputSchema } from './item.zod.js';

// Service for managing Item entities, including CRUD operations and soft deletion.
export class ItemService {
  /**
   * Retrieve a single item by its unique ID.
   * @param id - The unique identifier of the item.
   * @returns The item object or null if not found.
   */
  static async getItemById(id: number) {
    return client.item.findUnique({
      where: { id },
    });
  }

  /**
   * Retrieve all items from the database.
   * @returns An array of all item objects.
   */
  static async getAllItems() {
    return client.item.findMany();
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
  }) {
    const parsedInput = itemInputSchema.safeParse(input);
    if (!parsedInput.success) {
      throw new Error(parsedInput.error.errors[0].message);
    }
    
    return client.item.create({
      data: input,
    });
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
  ) {

    const parsedInput = itemInputSchema.partial().safeParse(input);
    if (!parsedInput.success) {
      throw new Error(parsedInput.error.errors[0].message);
    }
    
    return client.item.update({
      where: { id },
      data: input,
    });
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
  ) {
    return client.item.update({
      where: { id },
      data: {
        isDeleted,
        isActive,
      },
    });
  }
}
