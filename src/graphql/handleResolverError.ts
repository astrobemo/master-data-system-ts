// Higher-order function to wrap GraphQL resolvers with error handling.
// Catches errors, logs them, and returns a generic error message to the client.
//
// Note: To return custom error messages (e.g., for development), modify the thrown Error in the catch block below.
// For example, you can check process.env.NODE_ENV and return error.message or a custom error type.

import { ResolverFn } from './types.js';
import { UserInputError } from './customError.js';

/**
 * Wraps a resolver function to provide centralized error handling.
 * Logs any errors and returns a generic error message to the client.
 *
 * @param resolver - The original resolver function to wrap.
 * @returns A new resolver function with error handling.
 *
 * @remarks
 * This function can be easily modified to return custom error messages or error types during development.
 * For example, you may want to expose more detailed error information in non-production environments.
 *
 * To customize the error, edit the thrown Error in the catch block:
 *   throw new Error(error.message); // for development
 *   // or throw a custom error type
 */
const handleResolverError =
  <TParent = any, TArgs = any, TContext = any, TResult = any>(
    resolver: ResolverFn<TParent, TArgs, TContext, TResult>,
  ): ResolverFn<TParent, TArgs, TContext, TResult> =>
  async (parent, args, context, info) => {
    try {
      return await resolver(parent, args, context, info);
    } catch (error) {
      // Log the error
      if(error instanceof UserInputError) {
        // If you want to return a specific error type for user input errors
        throw new Error(error.message);
      }
      // To return a custom error, modify the line below as needed:
      // For development, you might use: throw new Error(error.message);
      console.error('Error in resolver:', error);
      throw new Error(
        'An error occurred while processing your request. Please try again later.',
      );
    }
  };

export default handleResolverError;
