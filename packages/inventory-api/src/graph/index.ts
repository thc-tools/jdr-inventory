// Libs
import { gql } from "apollo-server";

import { queries } from "./queries";
import { mutations } from "./mutations";
import { types } from "./types";

export { resolvers } from "./resolvers";

export const schema = gql`
    ${queries}
    ${mutations}
    ${types}
`;
