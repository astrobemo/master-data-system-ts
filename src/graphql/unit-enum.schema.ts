import { gql } from 'graphql-tag';

export const unitEnumTypeDefs = gql`
  enum Unit {
    PIECE
    YARD
    KILOGRAM
    LITER
    METER
    BOX
  }
`;
