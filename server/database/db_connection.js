const {Pool} = require("pg");
const url = require("url");
require("env2")("./.env");

let CURRENT_DB = process.env.DATABASE_URL

if(process.env.NODE_ENV === "test") {
    CURRENT_DB = process.env.TEST_DATABASE_URL
}

if(!CURRENT_DB) 
throw new Error ("Environment variable DATABSE_URL must be set")

const params = url.parse(CURRENT_DB)

const [username, password] = params.auth.split(':');

const options = {
    host:params.hostname,
    port:params.port,
    database: params.pathname.split('/')[1],
    max:process.env.DB_MAX_CONNECTIONS || 2,
    user:username,
    password,
    ssl:params.hostname !== "localhost",
};

const dbConnection = new Pool(options)

module.exports = dbConnection;