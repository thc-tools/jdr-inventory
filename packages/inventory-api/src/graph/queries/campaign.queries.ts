// Libs
import { gql } from "apollo-server";

export const campaignQueries = gql`
    extend type Query {
        campaigns: [Campaign!]!
    }
`;
