// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function (req, res) {
    db.Todo.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", function (req, res) {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (results) {
      res.json(results);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function (req, res) {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos/:id", function (req, res) {
    if (req.body.complete) {
      db.Todo.update(
        { complete: false },

        {
          where: {
            "id": req.params.id
          }
        }).then(function (results) {
          res.json(results);
        });
    } else {
      db.Todo.update(
        { complete: true },

        {
          where: {
            "id": req.params.id
          }
        }).then(function (results) {
          res.json(results);
        });
    }
  });
};
