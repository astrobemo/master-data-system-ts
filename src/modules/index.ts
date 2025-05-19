import { mergeTypeDefs } from '@graphql-tools/merge';
import { mergeResolvers } from '@graphql-tools/merge';
import { itemTypeDefs } from './item/item.schema.js';
import { subitemTypeDefs } from './subitem/subitem.schema.js';
import { itemResolvers } from './item/item.resolver.js';
import { subitemResolvers } from './subitem/subitem.resolver.js';
import { unitEnumTypeDefs } from '../graphql/unit-enum.schema.js';

// Merge all type definitions, including the Unit enum
export const typeDefs = mergeTypeDefs([
  unitEnumTypeDefs,
  itemTypeDefs,
  subitemTypeDefs
]);

// Merge all resolvers
export const resolvers = mergeResolvers([itemResolvers, subitemResolvers]);
