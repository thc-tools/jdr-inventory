
export const queryResolvers = {
    users(_parent, _args, { dataSources }) {
        const userDataSource = dataSources.users ;

        return userDataSource.loadUsers();
    },
    campaigns: () => [],
};
