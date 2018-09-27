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
mongoose.connect("mongodb://localhost/populate", { useNewUrlParser: true });
db.Library.create({ name: "Campus Library" })
  .then(function (dbLibrary) {
    console.log(dbLibrary);
  })
  .catch(function (err) {
    console.log(err.message);
  });
app.post("/submit", function (req, res) {
  db.Book.create(req.body)
    .then(function (dbBook) {
      return db.Library.findOneAndUpdate({}, { $push: { books: dbBook._id } }, { new: true });
    })
    .then(function (dbLibrary) {
      res.json(dbLibrary);
    })
    .catch(function (err) {
      res.json(err);
    });
});
app.get("/books", function (req, res) {
  db.Book.find({})
    .then(function (dbBook) {
      res.json(dbBook);
    })
    .catch(function (err) {
      res.json(err);
    });
});
app.get("/library", function (req, res) {
  db.Library.find({})
    .then(function (dbLibrary) {
      res.json(dbLibrary);
    })
    .catch(function (err) {
      res.json(err);
    });
});
app.get("/populated", function (req, res) {
  db.Library.find({})
    .populate("books")
    .then(function (dbLibrary) {
      res.json(dbLibrary);
    })
    .catch(function (err) {
      res.json(err);
    });
});
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
