// Libs
import { gql } from "apollo-server";

// Types
import { ResolverFn } from "../_utils";
import { UserInput } from "../types/inputs";
import { UserResponse } from "../types/outputs";

export type Mutation = {
    addUser: ResolverFn<{ user: UserInput }, UserResponse>;
};

export const mutations = gql`
    type Mutation {
        addUser(user: UserInput!): UserResponse!
    }
`;
