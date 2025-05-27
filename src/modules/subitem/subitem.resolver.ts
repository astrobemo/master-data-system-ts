// Resolvers for SubItem GraphQL operations, connecting GraphQL queries and mutations to SubItemService methods.
// Structure and logic are similar to the Item module, but specific to subitems.

import Decimal from '../../graphql/decimal.js';
import DateScalar from '../../graphql/date.js';
import handleResolverError from '../../graphql/handleResolverError.js';
import { ResolverFn } from '../../graphql/types.js';
import { SubItemService } from './subitem.service.js';
import { SubItem } from './subitem.model.js';
import { Unit } from '@prisma/client';

/**
 * Resolver for fetching subitems by their parent item ID.
 * @param itemId - The unique identifier of the parent item.
 * @returns An array of subitem objects.
 */
const getSubItemByItemId: ResolverFn<
  null,
  { itemId: number },
  {},
  SubItem[]
> = async (_, { itemId }, {}) => {
  return SubItemService.getSubItemByItemId(itemId);
};

const getSubItems: ResolverFn<null, {}, {}, SubItem[]
> = async (_, __, {}) => {
  return SubItemService.getAllSubItems();
};

/**
 * Resolver for creating a new subitem.
 * @param input - The subitem data to create (excluding id, timestamps, and status flags).
 * @returns The created subitem object.
 */
const createSubItem: ResolverFn<
  null,
  {
    input: Omit<
      SubItem,
      'id' | 'createdAt' | 'updatedAt' | 'isActive' | 'isDeleted'
    >;
  },
  {},
  SubItem
> = async (_, { input }, {}) => {
  const { itemId, skuCode, name, unit, description = null, price } = input;
  return SubItemService.createSubItem({
    itemId,
    skuCode,
    name,
    unit: unit as Unit, // Cast to Prisma enum
    description,
    price,
  });
};

/**
 * Resolver for updating an existing subitem.
 * @param id - The unique identifier of the subitem to update.
 * @param input - Partial subitem data to update.
 * @returns The updated subitem object.
 */
const updateSubItem: ResolverFn<
  null,
  {
    id: number;
    input: Partial<
      Omit<SubItem, 'id' | 'createdAt' | 'updatedAt' | 'isActive' | 'isDeleted'>
    >;
  },
  {},
  SubItem
> = async (_, { id, input }, {}) => {
  const { itemId, skuCode, name, unit, description = null, price } = input;
  return SubItemService.updateSubItem(id, {
    itemId,
    skuCode,
    name,
    unit: unit as Unit, // Cast to Prisma enum
    description,
    price,
  });
};

/**
 * Resolver for soft deleting a subitem by ID.
 * @param id - The unique identifier of the subitem to delete.
 * @returns The updated subitem object with deletion flags set.
 */
const deleteSubItem: ResolverFn<null, { id: number }, {}, SubItem> = async (
  _,
  { id },
  {},
) => {
  return SubItemService.deleteSubItem(id);
};

export const subitemResolvers = {
  Decimal,
  Date: DateScalar,
  Query: {
    getSubItemByItemId: handleResolverError(getSubItemByItemId),
    getSubItems: handleResolverError(getSubItems),
  },
  Mutation: {
    createSubItem: handleResolverError(createSubItem),
    updateSubItem: handleResolverError(updateSubItem),
    deleteSubItem: handleResolverError(deleteSubItem),
  },
};
