// Libs
import { gql } from "apollo-server";

export const mutations = gql`
    type Mutation {
        addUser(user: UserInput!): UserResponse!
    }
`;
