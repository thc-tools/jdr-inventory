// Libs
import { createConnection } from "typeorm";

// Models
import { entities } from "../models";

export function connectToDb() {
    return createConnection({
        type: "postgres",
        host: process.env.API_DB_HOST,
        port: process.env.API_DB_PORT,
        username: process.env.API_DB_USERNAME,
        password: process.env.API_DB_PASSWORD,
        database: process.env.API_DB_DATABASE,
        entities,
        synchronize: true,
        loggin: true,
    });
}
