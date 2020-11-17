// Libs
import { gql } from "apollo-server";

export class UserInput {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
}

export const inputs = gql`
    input UserInput {
        id: ID
        firstName: String!
        lastName: String!
        username: String!
        email: String!
    }
`;
