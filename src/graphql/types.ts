import { GraphQLResolveInfo } from 'graphql';

export type ResolverFn<
  TParent = any,
  TArgs = any,
  TContext = any,
  TResult = any,
> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;
