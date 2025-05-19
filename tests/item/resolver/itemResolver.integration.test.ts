import { describe, it, expect, vi, beforeEach } from 'vitest';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServer } from '@apollo/server';
import { itemResolvers } from '../../../src/modules/item/item.resolver';
import fs from 'fs';
import path from 'path';
import { ItemService } from '../../../src/modules/item/item.service';

// Read the schema from file
const typeDefs = fs.readFileSync(
  path.join(__dirname, '../../../src/modules/item/item.schema.ts'),
  'utf-8'
);

vi.mock('../../../src/modules/item/item.service');

const mockItem = {
  id: 1,
  sku_code: 'SKU001',
  name: 'Test Item',
  unit: 'PCS',
  description: 'desc',
  price: 100,
  isActive: true,
  isDeleted: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

describe('Item GraphQL Integration', () => {
  let server: ApolloServer;
  let url: string;

  beforeEach(async () => {
    (ItemService.getItemById as any).mockResolvedValue(mockItem);
    server = new ApolloServer({ typeDefs, resolvers: itemResolvers });
    const { url: serverUrl } = await startStandaloneServer(server, { listen: { port: 0 } });
    url = serverUrl;
  });

  it('should fetch an item by id', async () => {
    const query = `
      query GetItem($id: Int!) {
        getItem(id: $id) {
          id
          sku_code
          name
          unit
          description
          price
        }
      }
    `;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { id: 1 } }),
    });
    const { data } = await response.json();
    expect(data.getItem).toMatchObject({
      id: 1,
      sku_code: 'SKU001',
      name: 'Test Item',
      unit: 'PCS',
      description: 'desc',
      price: 100,
    });
  });
});
