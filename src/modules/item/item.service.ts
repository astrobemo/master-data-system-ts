import { client } from '../../database/prismaClient.js';

export class ItemService {
  static async getItemById(id: number) {
    return client.item.findUnique({
      where: { id },
    });
  }

  static async getAllItems() {
    return client.item.findMany();
  }

  static async createItem(data: { sku_code: string; name: string; unit: string; description?: string; price: number }) {
    return client.item.create({
      data,
    });
  }

  static async updateItem(id: number, data: Partial<{ sku_code: string; name: string; unit: string; description?: string; price: number }>) {
    return client.item.update({
      where: { id },
      data,
    });
  }

  static async deleteItem(id: number) {
    return client.item.delete({
      where: { id },
    });
  }
}