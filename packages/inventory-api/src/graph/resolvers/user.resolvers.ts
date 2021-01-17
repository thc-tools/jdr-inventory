// Types
import { QueryResolvers, MutationResolvers, Resolvers } from "../generated";

// Models
import { User } from "../../models";

// Infrastructure
import { responsify } from "./_utils";

export const queryResolvers: QueryResolvers = {
    users(_parent, _args, { dataSources }) {
        const userDataSource = dataSources.users;

        return userDataSource.loadUsers();
    },
};

export const mutationResolvers: MutationResolvers = {
    addUser: (_parent, { user }, { dataSources }) => {
        const userDataSource = dataSources.users;

        return responsify(
            () => userDataSource.saveUser(user),
            (_user) => ({ user: _user })
        );
    },
};

export const typesResolvers: Resolvers = {
    User: {
        id(parent) {
            return parent.id;
        },
    },
};
