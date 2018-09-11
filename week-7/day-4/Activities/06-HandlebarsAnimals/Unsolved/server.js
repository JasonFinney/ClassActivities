var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function (req, res) {
  res.render("dog", animals[0]);
});

app.get("/all-pets", function (req, res) {
  var data = {
    animals: []
  };
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].pet) {
      data.animals.push(animals[i]);
    };
  };
  res.render("index", data);
});

app.get("/all-non-pets", function (req, res) {
  var data = {
    animals: []
  };
  for (let i = 0; i < animals.length; i++) {
    if (!animals[i].pet) {
      data.animals.push(animals[i]);
    };
  };
  return res.render("index", data);
});

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
