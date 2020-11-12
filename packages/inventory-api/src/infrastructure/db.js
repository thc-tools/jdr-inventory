import { Sequelize } from "sequelize";

export const dbConnection = new Sequelize(process.env.API_DB_CONNECTION_STRING);
