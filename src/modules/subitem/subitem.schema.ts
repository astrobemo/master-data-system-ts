import { gql } from 'graphql-tag';

export const subitemTypeDefs = gql`
  scalar Decimal
  scalar Date

  type SubItem {
    id: Int!
    itemId: ID!
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

  input CreateSubItemInput {
    itemId: Int!
    skuCode: String!
    name: String!
    unit: Unit!
    description: String
    price: Decimal!
  }

  input UpdateSubItemInput {
    itemId: Int!
    skuCode: String
    name: String
    unit: Unit!
    description: String
    price: Decimal
  }

  type Mutation {
    createSubItem(input:CreateSubItemInput): SubItem!
    updateSubItem(id:Int!,input:UpdateSubItemInput): SubItem!
    deleteSubItem(id: Int!): SubItem!
  }

  #   ===========query===========
  type Query {
    getSubItems(offset: Int, limit: Int): [SubItem]
    getSubItemByItemId(itemId: Int!): [SubItem]
  }
`;
