import { gql } from 'graphql-tag';

export const subitemTypeDefs = gql`
  scalar Decimal
  scalar Date

  type SubItem {
    id: ID!
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

  type Mutation {
    createSubItem(
      itemId: ID!
      skuCode: String!
      name: String!
      unit: Unit!
      description: String
      price: Decimal!
    ): SubItem!

    updateSubItem(
      id: ID!
      itemId: ID
      skuCode: String
      name: String
      unit: Unit!
      description: String
      price: Decimal
    ): SubItem!

    deleteSubItem(id: ID!): SubItem!
  }

  #   ===========query===========
  type Query {
    getSubItems(offset: Int, limit: Int): [SubItem]
    getSubItemByItemId(itemId: ID!): [SubItem]
  }
`;
