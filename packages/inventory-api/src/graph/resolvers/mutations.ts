// Infrastructure
import { responsify } from "./_utils";

// Types
import { User } from "../../models";
import { MutationResolvers } from "../generated";

export const mutationResolvers: MutationResolvers = {
    addUser: (_parent, { user }, { dataSources }) => {
        const userDataSource = dataSources.users;

        return responsify(
            () => userDataSource.saveUser({ ...user, isActive: false } as User),
            (user) => ({ user })
        );
    },
};
