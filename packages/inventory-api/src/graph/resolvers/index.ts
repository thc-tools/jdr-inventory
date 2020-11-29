// Types
import { Resolvers } from "../generated";

// Infrastructure
import { mergeEntityResolvers } from "./_utils";

// Resolvers
import * as campaignResolvers from "./campaign.resolvers";
import * as userResolvers from "./user.resolvers";

export const resolvers: Resolvers = mergeEntityResolvers([campaignResolvers, userResolvers]);
