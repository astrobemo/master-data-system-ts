import { GraphQLScalarType, Kind } from 'graphql';

// Define custom scalar for Decimal
export const Decimal = new GraphQLScalarType({
  name: 'Decimal',
  description: 'Custom scalar type for Decimal values',
  serialize(value: unknown) {
    if (typeof value === 'number' || typeof value === 'string') {
      return value.toString(); // Convert outgoing Decimal to string
    }
    throw new Error('Decimal must be a number or string');
  },
  parseValue(value: unknown) {
    if (typeof value === 'string' || typeof value === 'number') {
      return parseFloat(value.toString()); // Convert incoming value to Decimal
    }
    throw new Error('Decimal must be a string or number');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.FLOAT || ast.kind === Kind.STRING) {
      return parseFloat(ast.value); // Convert AST literal to Decimal
    }
    throw new Error('Decimal must be a float or string literal');
  },
});
