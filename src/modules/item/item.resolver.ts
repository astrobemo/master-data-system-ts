import { Query } from 'pg';
import { Decimal } from '../decimal.js';
import { client } from '../../database/prisma-client.js';
// Export resolvers for Decimal
export const itemResolvers = {
  Decimal,
  Query: {
    items: async (_: unknown, __: unknown, { pool }: { pool: Query }) => {
      const res = await client.item.findMany();
      return res;
    }
  },
};
