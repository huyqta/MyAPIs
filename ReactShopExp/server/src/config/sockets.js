"use strict";
var server = require('./server').serverInstance;
var sio = require('socket.io')(server);
var sessionMiddleware = require("./sessionMiddleware");

// Set session  handler
sio.use(function(socket, next) {
  sessionMiddleware(socket.request, socket.request.res, next);
});

module.exports = sio;
