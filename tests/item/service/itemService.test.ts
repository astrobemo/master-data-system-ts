import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ItemService } from '../../../src/modules/item/item.service';
import { client } from '../../../src/database/prismaClient';
import { Unit } from '@prisma/client';

vi.mock('../../../src/database/prismaClient', () => ({
  client: {
    item: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
  },
}));

describe('ItemService', () => {
  const mockItem = {
    id: 1,
    sku_code: 'SKU001',
    name: 'Test Item',
    unit: 'PCS' as Unit,
    description: 'desc',
    price: 100,
    isActive: true,
    isDeleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('getItemById should call findUnique and return item', async () => {
    (client.item.findUnique as any).mockResolvedValue(mockItem);
    const result = await ItemService.getItemById(1);
    expect(client.item.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(result).toBe(mockItem);
  });

  it('getAllItems should call findMany and return items', async () => {
    (client.item.findMany as any).mockResolvedValue([mockItem]);
    const result = await ItemService.getAllItems();
    expect(client.item.findMany).toHaveBeenCalled();
    expect(result).toEqual([mockItem]);
  });

  it('createItem should call create and return new item', async () => {
    (client.item.create as any).mockResolvedValue(mockItem);
    const input = {
      sku_code: 'SKU001',
      name: 'Test Item',
      unit: 'PCS' as Unit,
      description: 'desc',
      price: 100,
    };
    const result = await ItemService.createItem(input);
    expect(client.item.create).toHaveBeenCalledWith({ data: input });
    expect(result).toBe(mockItem);
  });

  it('createItem should throw error if name is missing or a whitespace', async () => {
    (client.item.create as any).mockResolvedValue(mockItem);
    const input = { ...mockItem, name: '' };
    await expect(ItemService.createItem(input)).rejects.toThrow(
      'Item name is required',
    );
  });

  it('updateItem should throw error if name is missing or a whitespace', async () => {
    (client.item.update as any).mockResolvedValue(mockItem);
    const input = { ...mockItem, name: '   ' };
    await expect(ItemService.updateItem(1, input)).rejects.toThrow(
      'Item name is required',
    );
  });

  it('updateItem should call update and return updated item', async () => {
    (client.item.update as any).mockResolvedValue(mockItem);
    const input = { name: 'Updated' };
    const result = await ItemService.updateItem(1, input);
    expect(client.item.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: input,
    });
    expect(result).toBe(mockItem);
  });

  it('deleteItem should call update and return deleted item', async () => {
    (client.item.update as any).mockResolvedValue(mockItem);
    const result = await ItemService.deleteItem(1);
    expect(client.item.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: { isDeleted: true, isActive: false },
    });
    expect(result).toBe(mockItem);
  });
});
