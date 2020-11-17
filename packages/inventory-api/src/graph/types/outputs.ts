// Libs
import { gql } from "apollo-server";

export class User {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
}

export class UserResponse {
    error?: string;
    user?: User;
}

export class Campaign {
    id: string;
    name: string;
}

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
