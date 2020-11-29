// Libs
import { gql } from "apollo-server";

export const userTypes = gql`
    type User {
        id: ID!
        firstName: String
        lastName: String
        username: String 
        email: String
    }

    type UserResponse {
        error: String
        user: User
    }

    input UserInput {
        id: ID
        firstName: String!
        lastName: String!
        username: String!
        email: String!
    }
`;
