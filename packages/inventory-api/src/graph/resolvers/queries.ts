// Types
import { QueryResolvers } from "../generated";

export const queryResolvers: QueryResolvers = {
    users(_parent, _args, { dataSources }) {
        const userDataSource = dataSources.users;

        return userDataSource.loadUsers();
    },
    campaigns: () => [],
};
