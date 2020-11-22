// Types
import { Resolvers } from "../generated";

// Resolvers
import { queryResolvers } from "./queries";
import { mutationResolvers } from "./mutations";
import { typeResolvers } from "./types";

export const resolvers: Resolvers = {
    Query: queryResolvers,
    Mutation: mutationResolvers,
    ...typeResolvers,
};
