const express = require("express");
const path = require("path");
const router = require("./router");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "/../client/build")));

//for parsing json data in requests
app.use(express.json());

// request handling is in router file
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Chatti server listening on ${port}`);

module.exports = app;
