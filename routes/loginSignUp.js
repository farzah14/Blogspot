const express = require("express");
const route = express.Router();
const loginSignupControllers = require("../controllers/loginSignUp");

route.get("/signup", loginSignupControllers.signUpPage);
route.get("/login", loginSignupControllers.loginPage);

module.exports = route;
