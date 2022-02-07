const connection = require("./connection")
const express = require('express');
const bodyParser = require("body-parser")

// Style Engine
connection.use(express.static("./public"));

//View Engine
connection.set('view engine', 'ejs');
connection.set('views',"./Views");

// Body Pharser
connection.use(bodyParser.urlencoded({
    extended:true
}));

module.exports = connection;