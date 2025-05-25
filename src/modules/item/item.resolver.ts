// Resolvers for Item GraphQL operations, connecting GraphQL queries and mutations to ItemService methods.
// Handles fetching, creating, updating, and deleting items.

// import { Pool, Query } from 'pg';
import Decimal from '../../graphql/decimal.js';
import DateScalar from '../../graphql/date.js';
import handleResolverError from '../../graphql/handleResolverError.js';
import { ResolverFn } from '../../graphql/types.js';
import { ItemService } from './item.service.js';
import { Item } from './item.model.js';
import { Unit } from '@prisma/client';
// Export resolvers for Decimal

/**
 * Resolver for fetching a single item by ID.
 * @param id - The unique identifier of the item.
 * @returns The item object or null if not found.
 */
const getItem: ResolverFn<null, { id: number }, {}, Item | null> = async (
  _,
  { id },
  {},
) => {
  return ItemService.getItemById(id);
};

/**
 * Resolver for fetching all items.
 * @returns An array of all item objects.
 */
const getItems: ResolverFn<null, {}, {}, Item[]> = async (_, __, {}) => {
  return ItemService.getAllItems();
};

/**
 * Resolver for creating a new item.
 * @param input - The item data to create (excluding id, timestamps, and status flags).
 * @returns The created item object.
 */
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

/**
 * Resolver for updating an existing item.
 * @param id - The unique identifier of the item to update.
 * @param input - Partial item data to update.
 * @returns The updated item object.
 */
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

/**
 * Resolver for soft deleting an item by ID.
 * @param id - The unique identifier of the item to delete.
 * @returns The updated item object with deletion flags set.
 */
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
