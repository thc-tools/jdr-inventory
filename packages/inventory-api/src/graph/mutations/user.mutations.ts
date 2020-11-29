// Libs
import { gql } from "apollo-server";

export const userMutations = gql`
    extend type Mutation {
        addUser(user: UserInput!): UserResponse!
    }
`;
