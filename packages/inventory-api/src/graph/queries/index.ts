import { gql } from "apollo-server";

export const queries = gql`
    type Query {
        users: [User!]!
        campaigns: [Campaign!]!
    }
`;
