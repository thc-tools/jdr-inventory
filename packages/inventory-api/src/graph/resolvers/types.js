export const typeResolvers = {
    User: {
        id(parent, _args, _context) {
            return parent._id.toString();
        },
    },
};
