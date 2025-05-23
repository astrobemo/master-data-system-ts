// import { Pool, Query } from 'pg';
import Decimal from '../../graphql/decimal.js';
import DateScalar from '../../graphql/date.js';
import handleResolverError from '../../graphql/handleResolverError.js';
import { ResolverFn } from '../../graphql/types.js';
import { ItemService } from './item.service.js';
import { Item } from './item.model.js';
import { Unit } from '@prisma/client';
// Export resolvers for Decimal

const getItem: ResolverFn<null, { id: number }, {}, Item | null> = async (
  _,
  { id },
  {},
) => {
  return ItemService.getItemById(id);
};

const getItems: ResolverFn<null, {}, {}, Item[]> = async (_, __, {}) => {
  return ItemService.getAllItems();
};

const createItem: ResolverFn<
  null,
  {
    input: Omit<
      Item,
      'id' | 'createdAt' | 'updatedAt' | 'isActive' | 'isDeleted'
    >;
  },
  {},
  Item
> = async (_, { input }, {}) => {
  const { skuCode, name, unit, description = null, price } = input;
  return ItemService.createItem({
    skuCode,
    name,
    unit: unit as Unit, // Cast to Prisma enum
    description,
    price,
  });
};

const updateItem: ResolverFn<
  null,
  {
    id: number;
    input: Partial<
      Omit<Item, 'id' | 'createdAt' | 'updatedAt' | 'isActive' | 'isDeleted'>
    >;
  },
  {},
  Item
> = async (_, { id, input }, {}) => {
  const { skuCode, name, unit, description = null, price } = input;
  return ItemService.updateItem(id, {
    skuCode,
    name,
    unit: unit as Unit, // Cast to Prisma enum
    description,
    price,
  });
};
const deleteItem: ResolverFn<null, { id: number }, {}, Item> = async (
  _,
  { id },
  {},
) => {
  return ItemService.deleteItem(id);
};

export const itemResolvers = {
  Decimal,
  Date: DateScalar,
  Query: {
    getItem: handleResolverError(getItem),
    getItems: handleResolverError(getItems),
  },
  Mutation: {
    createItem: handleResolverError(createItem),
    updateItem: handleResolverError(updateItem),
    deleteItem: handleResolverError(deleteItem),
  },
};
