// Libs
import { gql } from "apollo-server";

export const inputs = gql`
    input UserInput {
        id: ID
        firstName: String!
        lastName: String!
        username: String!
        email: String!
    }
`;
