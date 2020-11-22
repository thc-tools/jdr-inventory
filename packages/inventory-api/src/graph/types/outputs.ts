// Libs
import { gql } from "apollo-server";

export const outputs = gql`
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

    type Campaign {
        id: ID!
        name: String!
    }
`;
