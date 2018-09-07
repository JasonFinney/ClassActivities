var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 9000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
    {
        routeName: "Johnson",
        name: "Johnson",
        party: 4,
        date: "09/10/2018",
        time: "20:00"
    },
    {
        routeName: "Smith",
        name: "Smith",
        party: 2,
        date: "09/11/2018",
        time: "19:00"
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "hotrestaurantView.html"));
});

app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.post("/api/reserve", function (req, res) {
    var newreservation = req.body;
    console.log(newreservation);
    reservations.push(newreservation);
    res.json(newreservation);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.get("/api/reservations/:reservation", function (req, res) {
    var chosenRES = req.params.reservation;
    console.log(chosenRES);
    for (var i = 0; i < reservations.length; i++) {
        if (chosenRES === reservations[i].routeName) {
            return res.json(reservations[i]);
        }
    }
    return res.json(false);
});