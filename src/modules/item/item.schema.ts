import { gql } from 'graphql-tag';
import { unitEnumTypeDefs } from '../../graphql/unit-enum.schema.js';

export const itemTypeDefs = gql`
  scalar Decimal
  scalar Date

  type Item {
    id: ID!
    sku_code: String!
    name: String!
    unit: Unit!
    description: String
    price: Decimal!
    isActive: Boolean!
    isDeleted: Boolean!
    createdAt: Date
    updatedAt: Date
  }

  type Mutation {
    createItem(
      sku_code: String!
      name: String!
      unit: Unit!
      description: String
      price: Decimal!
    ): Item!

    updateItem(
      id: ID!
      sku_code: String
      name: String
      unit: Unit!
      description: String
      price: Decimal
    ): Item!

    deleteItem(id: ID!): Item!
  }
  type Query {
    getItem(id: ID!): Item
    getItems(offset: Int, limit: Int): [Item!]!
  }
`;
