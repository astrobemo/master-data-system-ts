import { mergeTypeDefs } from '@graphql-tools/merge';
import { mergeResolvers } from '@graphql-tools/merge';
import { itemTypeDefs, subitemTypeDefs } from './item/item.schema.js';
import { itemResolvers } from './item/item.resolver.js';

// Merge all type definitions
export const typeDefs = mergeTypeDefs([itemTypeDefs, subitemTypeDefs]);

// Merge all resolvers
export const resolvers = mergeResolvers([itemResolvers]);
