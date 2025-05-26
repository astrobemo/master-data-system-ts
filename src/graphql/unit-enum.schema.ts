import { gql } from 'graphql-tag';

export const unitEnumTypeDefs = gql`
  enum Unit {
    PCS
    YARD
    KILOGRAM
    LITER
    METER
    BOX
  }
`;
