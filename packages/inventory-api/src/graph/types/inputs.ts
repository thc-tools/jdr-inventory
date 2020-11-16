// Libs
import { gql } from "apollo-server";

export const inputs = gql`
    input UserInput {
        id: ID!
        name: String
        email: String
    }
`;
