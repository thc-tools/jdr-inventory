// Libs
import { gql } from "apollo-server";

// Graph
import { campaignQueries } from "./campaign.queries";
import { userQueries } from "./user.queries";

export const queries = gql`
    type Query {
        removeQuery: ID
    }
    ${campaignQueries}
    ${userQueries}
`;
