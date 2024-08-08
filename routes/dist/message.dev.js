"use strict";

var express = require("express");

var route = express.Router();

var messageControllers = require("../controllers/message");

route.get("/", messageControllers.messagePage);
route.get("/create", messageControllers.createMessage);
module.exports = route;