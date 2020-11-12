// Libs
import { gql } from "apollo-server";

export const outputs = gql`
    type User {
        id: ID!
        name: String
        email: String
    }

    type UserResponse {
        error: String
        user: User
    }

`;
