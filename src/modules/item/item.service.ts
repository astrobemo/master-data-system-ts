import { client } from '../../database/prismaClient.js';
import { Unit } from '@prisma/client';

export class ItemService {
  static async getItemById(id: number) {
    return client.item.findUnique({
      where: { id },
    });
  }

  static async getAllItems() {
    return client.item.findMany();
  }

  static async createItem(input: {
    sku_code: string;
    name: string;
    unit: Unit;
    description: string | null;
    price: number;
  }) {
    return client.item.create({
      data: input,
    });
  }

  static async updateItem(
    id: number,
    input: Partial<{
      sku_code: string;
      name: string;
      unit: Unit;
      description: string | null;
      price: number;
    }>,
  ) {
    return client.item.update({
      where: { id },
      data: input,
    });
  }

  static async deleteItem(
    id: number,
    isDeleted: boolean = true,
    isActive: boolean = false
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

