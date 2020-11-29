// Libs
import { gql } from "apollo-server";

export const userQueries = gql`
    extend type Query {
        users: [User!]!
    }
`;
