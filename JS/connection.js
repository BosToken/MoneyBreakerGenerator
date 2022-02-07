const express = require('express');
const serve = require("./serve");
const connection = express()

connection.listen(serve.servePort, () => {
    console.log(`Your Server Port : http://localhost:${serve.servePort}`)
});

module.exports = connection;