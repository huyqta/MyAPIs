"use strict";
var settings = require("./helpers/settings");

var disableLiveReload = process.argv[2] == "disableLiveReload";
settings.disableLiveReload = disableLiveReload;
console.log("Starting server... disableLiveReload: ", true);

// Init routes
require("./routes/auth");
require("./routes/api");
require("./routes/sockets");
require("./routes/isomorphic");

console.log("Server started");
