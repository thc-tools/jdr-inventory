// Libs
import { gql } from "apollo-server";

// Graph
import { userMutations } from "./user.mutations";

export const mutations = gql`
    type Mutation {
        removeMutation: ID
    }
    ${userMutations}
`;
