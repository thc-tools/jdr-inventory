// Libs
import { EntityManager } from "typeorm";

// Datasources
import { UserDataSource } from "./user";

export function createDataSources(manager: EntityManager) {
    return {
        users: new UserDataSource(manager)
    }
}

export type DataSources = ReturnType<typeof createDataSources>;