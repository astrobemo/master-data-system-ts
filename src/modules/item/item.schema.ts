import { gql } from 'graphql-tag';

export const itemTypeDefs = gql`
scalar Decimal

  type Item {
    id: ID!
    sku_code: String!
    name: String!
    unit: String!
    description: String
    price: Decimal!
    isActive: Boolean!
    isDeleted: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Mutation {
    createItem(
      sku_code: String!
      name: String!
      unit: String!
      description: String
      price: Decimal!
    ): Item!

    updateItem(
      id: ID!
      sku_code: String
      name: String
      unit: String
      description: String
      price: Decimal
    ): Item!

    deleteItem(id: ID!): Item!
  }

#   ===========subitem===========
  type SubItem {
    id: ID!
    itemId: ID!
    sku_code: String!
    name: String!
    unit: String!
    description: String
    price: Decimal!
    isActive: Boolean!
    isDeleted: Boolean!
    createdAt: String!
    updatedAt: String!
  }

    type Mutation {
        createSubItem(
        itemId: ID!
        sku_code: String!
        name: String!
        unit: String!
        description: String
        price: Decimal!
        ): SubItem!
    
        updateSubItem(
        id: ID!
        itemId: ID
        sku_code: String
        name: String
        unit: String
        description: String
        price: Decimal
        ): SubItem!
    
        deleteSubItem(id: ID!): SubItem!
    }

#   ===========query===========
    type Query {
        getItem(id: ID!): Item
        getItems(offset:0;limit:10): [Item!]!
        getSubItem(id: ID!): SubItem
        getSubItems(offset:0;limit:10): [SubItem!]!
    }
  
`;
