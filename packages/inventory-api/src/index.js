require("dotenv").config();

const { server } = require("./app");
const { dbConnection } = require("./infrastructure/db");

Promise.all([server.listen(process.env.PORT), dbConnection.authenticate()])
    .then(([{ url, err }]) => {
        if (err) {
            console.error(`ERROR APOLLO START: ${err.message}`);
        } else {
            console.log(`🚀 Listening on port ${url}`);
        }
    })
    .catch((err) => {
        console.error(`ERROR PG START: ${err.message}`);
    });
