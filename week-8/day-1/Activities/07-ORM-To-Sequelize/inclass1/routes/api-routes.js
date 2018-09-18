// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models")
// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function (req, res) {
    db.Todo.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function (req, res) {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (results) {
      res.json(results);
    });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
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

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function (req, res) {
    db.Todo.define({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (results) {
      res.json(results);
    });
  });
};
