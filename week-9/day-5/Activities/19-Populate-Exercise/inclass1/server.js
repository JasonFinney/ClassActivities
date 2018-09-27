var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var PORT = 3000;
var db = require("./models");
var app = express();
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost/populatedb", { useNewUrlParser: true });
db.User.create({ name: "Ernest Hemingway" })
  .then(function (dbUser) {
    console.log(dbUser);
  })
  .catch(function (err) {
    console.log(err.message);
  });
// Route for retrieving all Notes from the db
app.get("/notes", function (req, res) {
  db.Note.find({})
    .then(function (dbNote) {
      res.json(dbNote);
    })
    .catch(function (err) {
      res.json(err);
    });
});
// Route for retrieving all Users from the db
app.get("/user", function (req, res) {
  db.User.find({})
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});
// Route for saving a new Note to the db and associating it with a User
app.post("/submit", function (req, res) {
  db.Note.create(req.body)
    .then(function (dbNote) {
      return db.User.findOneAndUpdate({}, { $push: { notes: dbNote._id } }, { new: true });
    })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});
// Route to see what user looks like WITH populating
app.get("/populateduser", function (req, res) {
  // TODO
  // =====
  // Write the query to grab the documents from the User collection,
  // and populate them with any associated Notes.
  // TIP: Check the models out to see how the Notes refers to the User
});
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
