const express = require("express");
const route = express.Router();
const messageControllers = require("../controllers/message");

route.get("/", messageControllers.messagePage);

module.exports = route;
