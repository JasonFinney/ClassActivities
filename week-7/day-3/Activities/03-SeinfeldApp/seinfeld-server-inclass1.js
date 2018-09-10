var express = require("express");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 9000;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "seinfeld_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.get("/cast", function (req, res) {
    connection.query("SELECT * FROM actors ORDER BY id", function (err, result) {
        if (err) throw err;
        var html = "<h1> Seinfeld Cast </h1>";

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Name: " + result[i].Charname + " </p>";
            html += "<p> Attitude: " + result[i].attitude + "</p>";
            html += "<p>Coolness: " + result[i].coolness_points + " </p></li>";
        }

        html += "</ul>";

        res.send(html);
    });
});

app.get("/coolness-chart", function (req, res) {
    connection.query("SELECT * FROM actors ORDER BY coolness_points DESC", function (err, result) {
        if (err) throw err;
        var html = "<h1> Seinfeld Cast </h1>";

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Name: " + result[i].Charname + " </p>";
            html += "<p> Attitude: " + result[i].attitude + "</p>";
            html += "<p>Coolness: " + result[i].coolness_points + " </p></li>";
        }

        html += "</ul>";

        res.send(html);
    });
});

app.get("/attitude-chart/:attitude", function (req, res) {
    var att = req.params.attitude;
    connection.query("SELECT * FROM actors ORDER BY id", function (err, result) {
        if (err) throw err;
        var html = "<h1> Seinfeld Cast </h1>";

        html += "<ul>";
        for (var i = 0; i < result.length; i++) {
            if (att === result[i].attitude) {
                html += "<li><p> ID: " + result[i].id + "</p>";
                html += "<p>Name: " + result[i].Charname + " </p>";
                html += "<p> Attitude: " + result[i].attitude + "</p>";
                html += "<p>Coolness: " + result[i].coolness_points + " </p></li>";
            };
        };
        html += "</ul>";

        res.send(html);
    });
});

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});