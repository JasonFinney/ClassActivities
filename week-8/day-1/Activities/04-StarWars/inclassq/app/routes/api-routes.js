// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Characters = require("../model/character.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function (req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {
      console.log(req.params);
      Characters.findOne({
        where: {
          name: req.params.characters
        }
      }).then(function (results) {
        res.json(results);
      });
    } else {
      Characters.findAll({}).then(function (results) {
        res.json(results);
      });
    };

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function (req, res) {
    Characters.create({
      routeName: req.body.routeName,
      name: req.body.name,
      role: req.body.role,
      age: req.body.age,
      forcePoints: req.body.forcePoints
    }).then(function (results) {
      console.log(results);
    }).catch(err);
  });
};
