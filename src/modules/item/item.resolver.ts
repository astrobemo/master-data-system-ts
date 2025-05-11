// import { Pool, Query } from 'pg';
import { Decimal } from '../../graphql/decimal.js';
import handleResolverError from 'graphql/handleResolverError.js';
import { ResolverFn } from 'graphql/types.js';
import { ItemService, SubItemService } from './item.service.js';
import { Item, SubItem } from './item.model.js';
// Export resolvers for Decimal

const getItem: ResolverFn<null, { id: number }, {}, Item> = async (_, { id }, {}) => {
  return ItemService.getItemById(id);
};

const getItems: ResolverFn<null, {}, {}, Item> = async (_, __, {}) => {
  return ItemService.getAllItems();
};

const createItem: ResolverFn<null, { input: Item }, {}, Item> = async(_, { input }, {}) => {
  const { sku_code, name, unit, description, price } = input;
  return ItemService.createItem({ sku_code, name, unit, description, price });
};

const updateItem: ResolverFn<null, { id: number; input: Partial<Item> }, {}, Item> = async(_, { id, input }, {}) => {
  const { sku_code, name, unit, description, price } = input;
  return ItemService.updateItem(id, { sku_code, name, unit, description, price });
};
const deleteItem: ResolverFn<null, { id: number }, {}, Item> = async(_, { id }, {}) => {
  return ItemService.deleteItem(id);
};

//=================subitem================

const getSubItemByItemId: ResolverFn<null, { itemId: number }, {}, SubItem> = async (_, { itemId }, {}) => {
  return SubItemService.getSubItemByItemId(itemId);
};

const createSubItem: ResolverFn<null, { input: SubItem }, {}, SubItem> = async(_, { input }, {}) => {
  const { itemId, sku_code, name, unit, description, price } = input;
  return SubItemService.createSubItem({ itemId, sku_code, name, unit, description, price });
};
const updateSubItem: ResolverFn<null, { id: number; input: Partial<SubItem> }, {}, SubItem> = async(_, { id, input }, {}) => {
  const { itemId, sku_code, name, unit, description, price } = input;
  return SubItemService.updateSubItem(id, { itemId, sku_code, name, unit, description, price });
};

const deleteSubItem: ResolverFn<null, { id: number }, {}, SubItem> = async(_, { id }, {}) => {
  return SubItemService.deleteSubItem(id);
};

// testing using postgres
/*const getItem:ResolverFn<null, {id:string|number}, {pool:Pool}, any> = async (_, { id }, { pool }) => {
  const res = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
  if (res.rows.length === 0) {
    throw new Error(`Item with id ${id} not found`);
  }
  return res.rows[0];
}
const getItems:ResolverFn<null, {id:string|number}, {pool:Pool}, any> = async (_, { id }, { pool }) => {
  const res = await pool.query('SELECT * FROM items');
  if (res.rows.length === 0) {
    throw new Error(`No items found`);
  }
  return res.rows;
}*/

export const itemResolvers = {
  Decimal,
  Query: {
    item: handleResolverError(getItem),
    items: handleResolverError(getItems),
    createItem: handleResolverError(createItem),
    updateItem: handleResolverError(updateItem),
    deleteItem: handleResolverError(deleteItem),
    //=================subitem================
    getSubItemByItemId: handleResolverError(getSubItemByItemId),
    createSubItem: handleResolverError(createSubItem),
    updateSubItem: handleResolverError(updateSubItem),
    deleteSubItem: handleResolverError(deleteSubItem),
  },
};
