import { describe, it, expect, vi, beforeEach } from 'vitest';
import { itemResolvers } from '../../../src/modules/item/item.resolver';
import { ItemService } from '../../../src/modules/item/item.service';
import { GraphQLResolveInfo } from 'graphql';

vi.mock('../../../src/modules/item/item.service');

const mockItem = {
  id: 1,
  sku_code: 'SKU001',
  name: 'Test Item',
  unit: 'piece',
  description: 'A test item',
  price: 100,
  isActive: true,
  isDeleted: false,
  createdAt: new Date('2024-01-01T00:00:00Z'),
  updatedAt: new Date('2024-01-02T00:00:00Z'),
};

const fakeInfo = {} as GraphQLResolveInfo;

describe('itemResolvers.Query.getItem', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return an item by id', async () => {
    (ItemService.getItemById as any).mockResolvedValue(mockItem);
    const result = await itemResolvers.Query.item(null, { id: 1 }, {}, fakeInfo);
    expect(ItemService.getItemById).toHaveBeenCalledWith(1);
    expect(result).toEqual(mockItem);
  });

  it('should return null if item not found', async () => {
    (ItemService.getItemById as any).mockResolvedValue(null);
    const result = await itemResolvers.Query.item(null, { id: 999 }, {}, fakeInfo);
    expect(ItemService.getItemById).toHaveBeenCalledWith(999);
    expect(result).toBeNull();
  });
});

describe('itemResolvers.Query.getItems', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return a list of items', async () => {
    (ItemService.getAllItems as any).mockResolvedValue([mockItem]);
    const result = await itemResolvers.Query.items(null, {}, {}, fakeInfo);
    expect(ItemService.getAllItems).toHaveBeenCalled();
    expect(result).toEqual([mockItem]);
  });

  it('should return an empty array if no items found', async () => {
    (ItemService.getAllItems as any).mockResolvedValue([]);
    const result = await itemResolvers.Query.items(null, {}, {}, fakeInfo);
    expect(ItemService.getAllItems).toHaveBeenCalled();
    expect(result).toEqual([]);
  });
});
