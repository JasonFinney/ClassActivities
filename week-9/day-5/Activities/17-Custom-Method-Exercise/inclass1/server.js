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
// Routes

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function (req, res) {
  // Create a new user using req.body

  // Update this route to run the `setFullName` and `lastUpdatedDate` methods before creating a new User
  // You must create these methods in the model.

  User.create(req.body)
    .then(function (dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
