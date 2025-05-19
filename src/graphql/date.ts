import { GraphQLScalarType, Kind } from 'graphql';

// Define custom scalar for Decimal
const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom scalar type for Date values',
  serialize(value: unknown) {
    if (value instanceof Date) {
      return value.toISOString(); // Convert outgoing Date to ISO string
    }
    throw new Error('Date must be a Date object');
  },
  parseValue(value: unknown) {
    if (typeof value === 'string') {
      return new Date(value); // Convert incoming value to Date
    }
    throw new Error('Date must be a string');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value); // Convert AST literal to Date
    }
    throw new Error('Date must be a string literal');
  },
});
export default DateScalar;
