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

  static async createItem(input: { 
    sku_code: string; 
    name: string; 
    unit: string; 
    description?: string; 
    price: number 
  }) {
    return client.item.create({
      input,
    });
  }

  static async updateItem(
    id: number, 
    input: Partial<{ 
      sku_code: string; 
      name: string; 
      unit: string; 
      description?: string; 
      price: number 
    }>) {
    return client.item.update({
      where: { id },
      input,
    });
  }

  static async deleteItem(id: number) {
    return client.item.delete({
      where: { id },
    });
  }
}

//===============subitem================
export class SubItemService {

  static async getSubItemByItemId(itemId: number) {
    return client.subItem.findMany({
      where: { itemId },
    });
  }

  static async createSubItem(input: { 
    itemId: number; 
    sku_code: string; 
    name: string; 
    unit: string; 
    description?: string; 
    price: number 
  }) {
    return client.subItem.create({
      input,
    });
  } 

  static async updateSubItem(
    id: number, 
    input: Partial<{ 
      itemId: number; 
      sku_code: string; 
      name: string; 
      unit: string; 
      description?: string; 
      price: number 
    }>) {
    return client.subItem.update({
      where: { id },
      input,
    });
  }

  static async deleteSubItem(id: number) {
    return client.subItem.delete({
      where: { id },
    });
  }
  
}