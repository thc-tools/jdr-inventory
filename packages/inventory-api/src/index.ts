/* eslint-disable */
import("reflect-metadata");

import { config } from "dotenv";
config();

import { server } from "./app";
import { connectToDb } from "./infrastructure/db";
import { logger } from "./infrastructure/logger";

Promise.all([server.listen(process.env.PORT), connectToDb()])
    .then(([{ url }]) => {
        logger.info(`🚀 Listening on ${url}`);
    })
    .catch((err) => {
        logger.error(`ERROR START: ${err.message}`);
    });
