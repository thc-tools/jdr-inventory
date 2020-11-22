// Types
import {UserResolvers} from "../generated"

type TypesResolvers = {
    User: UserResolvers
}

export const typeResolvers: TypesResolvers = {
    User: {
        id(parent, _args, _context) {
            return parent.id;
        },
    },
};
