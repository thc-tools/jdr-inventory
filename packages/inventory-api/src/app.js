// Libs
import { ApolloServer } from "apollo-server";

// Graph
import { schema, resolvers } from "./graph";
import { userDatasource } from "./datasources";

export const server = new ApolloServer({
    resolvers,
    typeDefs: schema,
    dataSources: () => {
        return {
            users: userDatasource(),
        };
    },
});
