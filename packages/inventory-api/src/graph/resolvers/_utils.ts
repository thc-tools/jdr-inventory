// Types
import { Resolvers, QueryResolvers, MutationResolvers } from "../generated";

// Infrastructure
import { logger } from "../../infrastructure/logger";

export function responsify<P, R = P>(promise: () => Promise<P>, success: (p: P) => R): Promise<{ error?: string } | R> {
    try {
        return promise()
            .then(success)
            .catch((err: Error) => {
                logger.error(err);
                return { error: err.message };
            });
    } catch (err) {
        logger.error(err);
        return Promise.resolve({ error: err.message });
    }
}

type EntityResolvers = {
    queryResolvers: QueryResolvers;
    mutationResolvers: MutationResolvers;
    typesResolvers: Resolvers;
};

export function mergeEntityResolvers(resolvers: EntityResolvers[]): Resolvers {
    return resolvers.reduce(
        (acc, val) => ({
            ...acc,
            ...val.typesResolvers,
            Query: {
                ...acc.Query,
                ...val.queryResolvers,
            },
            Mutation: {
                ...acc.Mutation,
                ...val.mutationResolvers,
            },
        }),
        { Query: {}, Mutation: {} }
    );
}
