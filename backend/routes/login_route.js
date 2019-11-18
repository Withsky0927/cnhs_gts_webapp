const express = require("express");
const Router = express.Router();

const loginController = require("../controller/login_controller");
const validateLogin = require("../middleware/validate_login");
const password_compare = require("../middleware/password_compare");

Router.get("/login", loginController);
Router.post("/login", validateLogin, password_compare, loginController);

module.exports = Router;
