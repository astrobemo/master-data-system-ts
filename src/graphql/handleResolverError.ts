import { ResolverFn } from "./types.js";

const handleResolverError = <TParent=any, TArgs=any, TContext = any, TResult = any> (
    resolver : ResolverFn<TParent, TArgs, TContext, TResult>
): ResolverFn<TParent, TArgs, TContext, TResult>  => async (parent, args, context, info) => {

    try {
        return await resolver(parent, args, context, info);
    }catch (error) {
        // Log the error
        console.error('Error in resolver:', error);
        throw new Error('An error occurred while processing your request. Please try again later.');
    }
}

export default handleResolverError;