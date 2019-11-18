const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const sessionStore = require("express-mysql-session")(session);
const connection = require("./config/connection");
const sessionOption = require("./config/session-option");
const connectionTest = require("./config/connection-test.js");

const port = process.env.PORT || 5000;

const SessionStore = new sessionStore(sessionOption);

dotenv.config();
// test connection
connectionTest();

//TODO initialize the server!
const server = express();

server.use(express.json());

server.use("/", require("./routes/login_route"));

server.listen(port, () => console.log(`server is listening on port:${port}`));
