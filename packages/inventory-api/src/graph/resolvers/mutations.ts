// Infrastructure
import { responsify } from "./_utils";

// Types
import { User } from "../../models";
import { Mutation } from "../mutations";

export const mutationResolvers: Mutation = {
    addUser: (_parent, { user }, { dataSources }) => {
        const userDataSource = dataSources.users;

        return responsify(
            () => userDataSource.saveUser(user as User),
            (user) => ({ user })
        );
    },
};
