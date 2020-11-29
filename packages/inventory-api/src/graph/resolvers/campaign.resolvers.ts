// Types
import { QueryResolvers, MutationResolvers, Resolvers } from "../generated";

export const queryResolvers: QueryResolvers = {
    campaigns: () => [],
};

export const mutationResolvers: MutationResolvers = {};

export const typesResolvers: Resolvers = {
    Campaign: {
        id(parent) {
            return parent.id;
        },
    },
};
