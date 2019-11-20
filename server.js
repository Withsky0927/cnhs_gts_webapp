"use strict";
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const session = require("express-session");
const sessionStore = require("express-mysql-session")(session);
const handlebars = require("express-handlebars");
const helmet = require("helmet");

const SessionStore = new sessionStore(sessionOption);

// custom import functionality
const connection = require("./config/connection");
const sessionOption = require("./config/session-option");
const connectionTest = require("./config/connection-test.js");
const port = process.env.PORT || 5000;

//initialize environment variables
dotenv.config();

// test database connection
connectionTest();

//initialize express method
const server = express();

// set helmet for basic web application security measurement

server.use(helmet.xssFilter());
server.use(helmet.frameguard());
server.use(helmet.contentSecurityPolicy());
server.use(helmet.hidePoweredBy());

/* 
    setup express builtin body parser for
    req and response object in http request and response
*/
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// setting public folder
server.use(express.static("public"));

// set handlebars as a view template engine
server.engine(
  "handlebars",
  handlebars({
    defaultLayout: "boilerplate",
    layoutsDir: path.join(__dirname, "views/template")
  })
);
server.set("view engine", "hbs");

server.use("/", require("./routes/login_route"));

server.listen(port, () => console.log(`server is listening on port:${port}`));
