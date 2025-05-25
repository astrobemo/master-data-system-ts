// Service for managing SubItem entities, including CRUD operations and soft deletion.
// Structure and logic are similar to the ItemService, but specific to subitems.

import { client } from '../../database/prismaClient.js';
import { Unit } from '@prisma/client';
import { subitemInputSchema } from './subitem.zod.js';

export class SubItemService {
  /**
   * Retrieve subitems by their parent item ID.
   * @param itemId - The unique identifier of the parent item.
   * @returns An array of subitem objects.
   */
  static async getSubItemByItemId(itemId: number) {
    return client.subitem.findMany({
      where: { itemId },
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
    sku_code: string;
    name: string;
    unit: Unit;
    description: string | null;
    price: number;
  }) {
    const parsedInput = subitemInputSchema.safeParse(input);
    if (!parsedInput.success) {
      throw new Error(parsedInput.error.errors[0].message);
    }
    return client.subitem.create({
      data: input,
    });
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
      sku_code: string;
      name: string;
      unit: Unit;
      description: string | null;
      price: number;
    }>,
  ) {
    const parsedInput = subitemInputSchema.partial().safeParse(input);
    if (!parsedInput.success) {
      throw new Error(parsedInput.error.errors[0].message);
    }
    return client.subitem.update({
      where: { id },
      data: input,
    });
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
  ) {
    return client.subitem.update({
      where: { id },
      data: {
        isDeleted,
        isActive,
      },
    });
  }
}
