const express = require("express");
const route = express.Router();
const messageControllers = require("../controllers/message");

route.get("/", messageControllers.messagePage);
route.get("/create", messageControllers.createMessage);

module.exports = route;
