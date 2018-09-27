var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var PORT = 3000;
var User = require("./userModel.js");
var app = express();
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost/custommethoddb", { useNewUrlParser: true });
app.post("/submit", function (req, res) {
  var user = new User(req.body);
  user.setFullName();
  user.lastUpdatedDate();
  User.create(user)
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
