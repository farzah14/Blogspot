"use strict";

exports.messagePage = function (req, res) {
  res.render("message", {
    title: "Message",
    create: false
  });
};

exports.createMessage = function (req, res) {
  res.render("message", {
    title: "Message",
    create: true
  });
};