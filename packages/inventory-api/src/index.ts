import("reflect-metadata");

import { config } from "dotenv";
config();

import { server } from "./app";
import { connectToDb } from "./infrastructure/db";

Promise.all([server.listen(process.env.PORT), connectToDb()])
    .then(([{ url }]) => {
        console.log(`🚀 Listening on ${url}`);
    })
    .catch((err) => {
        console.error(`ERROR START: ${err.message}`);
    });
