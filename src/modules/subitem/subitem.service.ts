import { client } from '../../database/prismaClient.js';
import { Unit } from '@prisma/client';

export class SubItemService {
  static async getSubItemByItemId(itemId: number) {
    return client.subitem.findMany({
      where: { itemId },
    });
  }

  static async createSubItem(input: {
    itemId: number;
    sku_code: string;
    name: string;
    unit: Unit;
    description: string | null;
    price: number;
  }) {
    return client.subitem.create({
      data: input,
    });
  }

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
    return client.subitem.update({
      where: { id },
      data: input,
    });
  }

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
