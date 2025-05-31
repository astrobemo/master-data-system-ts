// Service for managing SubItem entities, including CRUD operations and soft deletion.
// Structure and logic are similar to the ItemService, but specific to subitems.

import { client } from '../../database/prismaClient.js';
import { Prisma, Unit } from '@prisma/client';
import { subitemInputSchema } from './subitem.zod.js';
import { SubItem } from './subitem.model.js';
import { UserInputError } from '../../graphql/customError.js';
import { error } from 'console';

export class SubItemService {
  /**
   * Retrieve subitems by their parent item ID.
   * @param itemId - The unique identifier of the parent item.
   * @returns An array of subitem objects.
   */
  static async getSubItemByItemId(itemId: number): Promise<SubItem[]> {
    try {
      return await client.subitem.findMany({
        where: { 
          itemId: itemId,
          isDeleted: false,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new UserInputError('Item not found');
        }
      }
      throw error; // Re-throw other errors
      
    }
  }

  static async getAllSubItems(): Promise<SubItem[]> {
    return await client.subitem.findMany({  
      where: {
        isDeleted: false,
      },
    });
  }

  /**
   * Create a new subitem after validating input.
   * @param input - The subitem data to create.
   * @returns The created subitem object.
   * @throws Error if validation fails.
   */
  static async createSubItem(input: {
    itemId: number;
    skuCode: string;
    name: string;
    unit: Unit;
    description: string | null;
    price: number;
  }): Promise<SubItem> {
    const parsedInput = subitemInputSchema.safeParse(input);
    if (!parsedInput.success) {
      throw new Error(parsedInput.error.errors[0].message);
    }

    try {
      return await client.subitem.create({
        data: input,
      });
    } catch (error) {
      if(error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new UserInputError('Subitem with this SKU code already exists.');
        }
      }
      throw error; // Re-throw other Prisma errors
    }

  }

  /**
   * Update an existing subitem with partial input.
   * @param id - The unique identifier of the subitem to update.
   * @param input - Partial subitem data to update.
   * @returns The updated subitem object.
   * @throws Error if validation fails.
   */
  static async updateSubItem(
    id: number,
    input: Partial<{
      itemId: number;
      skuCode: string;
      name: string;
      unit: Unit;
      description: string | null;
      price: number;
    }>,
  ): Promise<SubItem> {
    const parsedInput = subitemInputSchema.partial().safeParse(input);
    if (!parsedInput.success) {
      throw new Error(parsedInput.error.errors[0].message);
    }

    try {
      return await client.subitem.update({
        where: { id },
        data: input,
      });
    } catch (error) {
      if( error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new UserInputError('Subitem with this SKU code already exists.');
        }
      }
      throw error; // Re-throw other Prisma errors
      
    }

  }

  /**
   * Soft delete a subitem by setting isDeleted and isActive flags.
   * @param id - The unique identifier of the subitem to delete.
   * @param isDeleted - Flag to mark subitem as deleted (default: true).
   * @param isActive - Flag to mark subitem as active (default: false).
   * @returns The updated subitem object.
   */
  static async deleteSubItem(
    id: number,
    isDeleted: boolean = true,
    isActive: boolean = false,
  ): Promise<SubItem> {
    try {
      return await client.subitem.update({
      where: { id },
      data: {
        isDeleted,
        isActive,
      },
    });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new UserInputError('Subitem not found');
        }
      }
      throw error; // Re-throw other errors 
    }
    
  }
}
