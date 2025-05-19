import { describe, expect, it, vi, beforeEach } from 'vitest';
import { itemResolvers } from '../../../src/modules/item/item.resolver';
import { ItemService } from '../../../src/modules/item/item.service';
import { GraphQLResolveInfo } from 'graphql';

vi.mock('../../../src/modules/item/item.service');

const mockItem = {
  sku_code: 'SKU001',
  name: 'Test Item',
  unit: 'piece',
  description: 'A test item',
  price: 100.29,
};

const fakeInfo = {} as GraphQLResolveInfo;

describe('itemResolvers.Mutation.createItem', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should create an item and return it', async () => {
    (ItemService.createItem as any).mockResolvedValue(mockItem);
    const result = await itemResolvers.Mutation.createItem(
      null,
      { input: mockItem },
      {},
      fakeInfo,
    );
    expect(ItemService.createItem).toHaveBeenCalledWith(mockItem);
    expect(result).toEqual(mockItem);
  });

  it('should throw an error if item creation fails', async () => {
    (ItemService.createItem as any).mockRejectedValue(
      new Error('Creation failed'),
    );
    await expect(
      itemResolvers.Mutation.createItem(
        null,
        { input: mockItem },
        {},
        fakeInfo,
      ),
    ).rejects.toThrow(
      'An error occurred while processing your request. Please try again later.',
    );
  });
});
