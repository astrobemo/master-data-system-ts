import Decimal from '../../graphql/decimal.js';
import DateScalar from '../../graphql/date.js';
import handleResolverError from '../../graphql/handleResolverError.js';
import { ResolverFn } from '../../graphql/types.js';
import { SubItemService } from './subitem.service.js';
import { SubItem } from './subitem.model.js';
import { Unit } from '@prisma/client';

const getSubItemByItemId: ResolverFn<
  null,
  { itemId: number },
  {},
  SubItem[]
> = async (_, { itemId }, {}) => {
  return SubItemService.getSubItemByItemId(itemId);
};

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
  const { itemId, sku_code, name, unit, description = null, price } = input;
  return SubItemService.createSubItem({
    itemId,
    sku_code,
    name,
    unit: unit as Unit, // Cast to Prisma enum
    description,
    price,
  });
};
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
  const { itemId, sku_code, name, unit, description = null, price } = input;
  return SubItemService.updateSubItem(id, {
    itemId,
    sku_code,
    name,
    unit: unit as Unit, // Cast to Prisma enum
    description,
    price,
  });
};

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
  },
  Mutation: {
    createSubItem: handleResolverError(createSubItem),
    updateSubItem: handleResolverError(updateSubItem),
    deleteSubItem: handleResolverError(deleteSubItem),
  },
};
