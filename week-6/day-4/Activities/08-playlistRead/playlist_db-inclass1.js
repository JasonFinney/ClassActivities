var mysql = require("mysql");
var inquirer = require("inquirer");
var songs = "fav_songs";
var userInput = process.argv[2];
console.log(userInput);

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "playlist_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    if (userInput) {
        if (isNaN(userInput)) {
            if (userInput === "add") {
                addSong();
            };
        } else { specificSong() };
    } else {
        songsConnection();
    }
});

function songsConnection() {
    connection.query("SELECT * FROM " + songs, function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
};

function specificSong() {
    connection.query("SELECT * FROM " + songs + " WHERE id = " + userInput, function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    })
};

function addSong() {
    console.log("adding song... \n");
    inquirer.prompt([
        {
            type: "input",
            name: "songName",
            message: "What is the Song's Name?",
        },
        {
            type: "input",
            name: "artistName",
            message: "What is the Artist's Name?",
        },
        {
            type: "input",
            name: "albumName",
            message: "What is the Album's Name?",
        }
    ]).then(function (stuff) {
        console.log("success!");
        connection.query("INSERT INTO " + songs + " (song, artist, album) VALUE " + "(" + stuff.songName + ", " + stuff.artistName + ", " + stuff.albumName + ");", function (err, res) {
            if (err) throw err;
            console.log(res);
            connection.end();
        });
    })
}