// import { Pool, Query } from 'pg';
import { Decimal } from '../../graphql/decimal.js';
import handleResolverError from 'graphql/handleResolverError.js';
import { ResolverFn } from 'graphql/types.js';
import { ItemService } from './item.service.js';
import { Item } from './item.model.js';
// Export resolvers for Decimal

const getItem: ResolverFn<null, { id: number }, {}, Item> = async (_, { id }, {}) => {
  return ItemService.getItemById(id);
};

const getItems: ResolverFn<null, {}, {}, Item> = async (_, __, {}) => {
  return ItemService.getAllItems();
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
  },
};
