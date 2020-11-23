// Types
import {UserResolvers} from "../generated"

type TypesResolvers = {
    User: UserResolvers
}

export const typeResolvers: TypesResolvers = {
    User: {
        id(parent) {
            return parent.id;
        },
    },
};
