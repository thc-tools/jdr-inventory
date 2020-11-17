// Libs
import { ApolloServer } from "apollo-server";

// Infrastructure
import { getConnection } from "./infrastructure/db";

// Graph
import { schema, resolvers } from "./graph";
import { createDataSources } from "./datasources";

export const server = new ApolloServer({
    resolvers,
    typeDefs: schema,
    dataSources: () => {
        return createDataSources(getConnection().manager);
    },
});
