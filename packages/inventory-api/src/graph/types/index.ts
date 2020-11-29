// Libs
import { gql } from "apollo-server";

// Graph
import { campaignTypes } from "./campaign.types";
import { userTypes } from "./user.types";

export const types = gql`
    ${campaignTypes}
    ${userTypes}
`;
