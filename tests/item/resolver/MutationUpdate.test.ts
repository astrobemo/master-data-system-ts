import { describe, vi, beforeEach, expect, it } from "vitest";
import { itemResolvers } from "../../../src/modules/item/item.resolver";
import { ItemService } from "../../../src/modules/item/item.service";
import { GraphQLResolveInfo } from "graphql";

vi.mock("../../../src/modules/item/item.service");

const mockItem = {
  id: 1,
  sku_code: "SKU001",
  name: "Test Item",
  unit: "piece",
  description: "A test item",
  price: 101,
};

const mockItemUpdate = {
  sku_code: "SKU001",
    name: "Test Item Updated",
    unit: "piece",
    description: "A test item",
    price: 101,
};

const fakeInfo = {} as GraphQLResolveInfo;

describe("itemResolvers.Mutation.updateItem", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should update an item and return it", async () => {
    (ItemService.updateItem as any).mockResolvedValue(mockItemUpdate);
    const result = await itemResolvers.Mutation.updateItem(
      null,
      { id: 1, input: mockItemUpdate },
      {},
      fakeInfo
    );
    expect(ItemService.updateItem).toHaveBeenCalledWith(1, mockItemUpdate);
    expect(result).toEqual(mockItemUpdate);
  });

  it("should throw an error if item update fails", async () => {
    (ItemService.updateItem as any).mockRejectedValue(
      new Error("Update failed")
    );
    await expect(
      itemResolvers.Mutation.updateItem(
        null,
        { id: 1, input: mockItem },
        {},
        fakeInfo
      )
    ).rejects.toThrow("An error occurred while processing your request. Please try again later.");
  });
});
