// Libs
import { ApolloServer } from "apollo-server";

// Infrastructure
import { getConnection } from "./infrastructure/db";
import { logger } from "./infrastructure/logger";

// Graph
import { schema, resolvers } from "./graph";
import { createDataSources } from "./datasources";

export const server = new ApolloServer({
    logger,
    resolvers,
    typeDefs: schema,
    dataSources: () => {
        return createDataSources(getConnection().manager);
    },
});
