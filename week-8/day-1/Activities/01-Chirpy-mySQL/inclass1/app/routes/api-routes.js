// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var server = require("../server.js");

// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps
  app.get("")

  // Add a chirp
  app.post("/api/new", function (req, res) {
    console.log("chirp data:");
    console.log(req.body)
  })

};
