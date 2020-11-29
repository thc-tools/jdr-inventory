// Libs
import { gql } from "apollo-server";

export const campaignTypes = gql`
    type Campaign {
        id: ID!
        name: String!
    }
`;
