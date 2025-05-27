import { gql } from 'graphql-tag';
import { unitEnumTypeDefs } from '../../graphql/unit-enum.schema.js';

export const itemTypeDefs = gql`
  scalar Decimal
  scalar Date

  type Item {
    id: Int!
    skuCode: String!
    name: String!
    unit: Unit!
    description: String
    price: Decimal!
    isActive: Boolean!
    isDeleted: Boolean!
    createdAt: Date
    updatedAt: Date
  }

  input CreateItemInput {
    skuCode: String!
    name: String!
    unit: Unit!
    description: String
    price: Decimal!
  }

  input UpdateItemInput {
    skuCode: String
    name: String
    unit: Unit!
    description: String
    price: Decimal
  }

  type Mutation {
    createItem(input:CreateItemInput): Item!
    updateItem(id:Int!, input:UpdateItemInput): Item!
    deleteItem(id: Int!): Item!
  }
  type Query {
    getItem(id: Int!): Item
    getItems(offset: Int, limit: Int): [Item!]!
  }
`;
