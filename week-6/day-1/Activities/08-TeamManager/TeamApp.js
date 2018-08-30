var inquirer = require("inquirer");

function Player(nameInput, positionInput, offenseInput, defenseInput) {
    this.name = nameInput;
    this.position = positionInput;
    this.offense = offenseInput;
    this.defense = defenseInput;
    this.goodGame = function () {
        var chance = Math.random();
        if (chance > .5) {
            this.offense++;
        } else {
            this.defense++;
        };
    };
    this.badGame = function () {
        var chance = Math.random();
        if (chance < .5) {
            this.offense--;
        } else {
            this.defense--;
        };
    };
};

Player.prototype.printInfo = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\noffense: " + this.offense + "\ndefense: " + this.defense);
};

var starters = [];
var subs = [];
var team = [];
var playercount = 0;
var number = 0;

var customInitialize = function () {
    end = true;
    inquirer.prompt([
        {
            type: "list",
            name: "initialization",
            message: "Would you like an automatically generated team? Or a custom team?",
            choices: ["Automatically Generated", "Custom Team"]
        },
    ]).then(function (choice) {
        if (choice.initialization === "Automatically Generated") {

            var starter1 = new Player("Sam", "Center", 4, 4);
            starters.push(starter1);
            var starter2 = new Player("Henry", "Forward", 4, 4);
            starters.push(starter2);
            var starter3 = new Player("John", "Guard", 4, 4);
            starters.push(starter3);
            var sub1 = new Player("Jerry", "Forward", 9, 9);
            subs.push(sub1);
            team.push(starter1);
            team.push(starter2);
            team.push(starter3);
            team.push(sub1);
            console.log("Meet your automatically generated team!");
            for (let i = 0; i < starters.length; i++) {
                starters[i].printInfo();
            };
            PlayGame(0);
        } else if (choice.initialization === "Custom Team") {
            if (playercount < 1) {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is this player's name?",
                        name: "nameInput",
                    },
                    {
                        type: "list",
                        name: "positionInput",
                        message: "What position does he play?",
                        choices: ["Center", "Forward", "Guard"]
                    },
                    {
                        type: "input",
                        message: "How well does he play offense?",
                        name: "offenseInput",
                        validate: function (value) {
                            if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                                return true;
                            } else {
                                return false;
                            };
                        }
                    },
                    {
                        type: "input",
                        message: "How well does he play defense?",
                        name: "defenseInput",
                        validate: function (value) {
                            if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                                return true;
                            } else {
                                return false;
                            };
                        }
                    },
                    {
                        type: "confirm",
                        name: "startingPlayer",
                        message: "Is he a starter?",
                    },
                ]).then(function (user) {
                    var newPlayer = new Player(
                        user.name,
                        user.position,
                        user.offense,
                        user.defense
                    );
                    playercount++;
                    if (user.startingPlayer === "yes") {
                        starters.push(user);
                    } else if (user.startingPlayer === "no") {
                        subs.push(user);
                    };
                    team.push(starters + subs);
                    customInitialize();
                });
            } else {
                console.log(starters);
                console.log(subs);
                console.log(team);
                // for (var x = 0; x < Team1array.length; x++) {
                //     Team1array[x].printInfo();
                // };
                // for (var i = 0; i < Team2array.length; i++) {
                //     Team2array[i].printInfo();
                // };
                // for (var o = 0; o < bencharray.length; o++) {
                //     bencharray[o].printInfo();
                // };
                PlayGame(0);
            };
        };
    });
};
customInitialize();

var scoreTeam1 = 0;
var scoreTeam2 = 0;

var roundNumber = 0;
var PlayGame = function (roundNumber) {
    if (roundNumber < 5) {
        roundNumber++;
        console.log("-------\nRound " + roundNumber + " \n-------");
        var offenseRandom = Math.floor(Math.random() * 20) + 1;
        var defenseRandom = Math.floor(Math.random() * 20) + 1;
        var teamOffense = 0;
        var teamDefense = 0;
        for (let i = 0; i < starters.length; i++) {
            teamOffense += starters[i].offense;
            teamDefense += starters[i].defense;
        };
        console.log("Total Offense: " + teamOffense + " VS " + offenseRandom + " :Opponent's Offense");
        console.log("Total Defense: " + teamDefense + " VS " + defenseRandom + " :Opponent's Defense");
        if (teamOffense > defenseRandom) {
            scoreTeam1++;
            console.log("You Scored!" + "\nYour Score: " + scoreTeam1 + "\nOpponent's Score: " + scoreTeam2);
        } else if (teamDefense < offenseRandom) {
            scoreTeam2++;
            console.log("You were Scored on!" + "\nYour Score: " + scoreTeam1 + "\nOppenent's Score: " + scoreTeam2);
        } else {
            console.log("Another Scoreless Round - These teams are just too evenly matched!" + "\nYour Score: " + scoreTeam1 + "\nOpponent's Score: " + scoreTeam2);
        };
        var bench = [];
        inquirer.prompt([
            {
                type: "confirm",
                name: "substitution",
                message: "Playing tough out there! Would you like a chance to sub in some fresh legs?"
            },
        ]).then(function (boolean) {
            if (boolean.substitution === true) {
                inquirer.prompt([
                    {
                        type: "list",
                        name: "out",
                        message: "Who would you like to sub out?",
                        choices: starters,
                    },
                    {
                        type: "list",
                        name: "in",
                        message: "Who would you like to sub in?",
                        choices: subs,
                    },
                ]).then(function (person) {
                    for (let i = 0; i < starters.length; i++) {
                        if (starters[i] === person.out) {
                            bench = starters[i];
                            number = i;
                        };
                    };
                    for (let o = 0; o < subs.length; o++) {
                        starters[number] = subs[o];
                        subs[o] = bench;
                    };
                    console.log("Substitution Successful!");
                    PlayGame(roundNumber);
                })
            } else if (boolean.substitution === false) {
                console.log("Plenty in the Tank! We didn't do those suicides for nothing!");
                PlayGame(roundNumber);
            };
        });

    } else {
        endGame();
        end = false;
    };
};
var end = true;
function endGame() {
    if (end === true) {
        console.log("\n--------endGame(): FINAL SCORE: " + "\nYour Score: " + scoreTeam1 + "\nOppenent's Score: " + scoreTeam2 + " --------\n");
        if (scoreTeam1 > scoreTeam2) {
            console.log("Good game, everyone!\nYour current starters' stats have improved!");
            for (var i = 0; i < starters.length; i++) {
                starters[i].goodGame();
            };
        };
        if (scoreTeam1 < scoreTeam2) {
            console.log("That was a poor performance!\nYour current starters' stats have decreased!");
            for (var i = 0; i < starters.length; i++) {
                starters[i].badGame();
            };
        };
        if (scoreTeam1 === scoreTeam2) {
            console.log("It was a tie game! Not good. Not bad.");
        };
        inquirer.prompt({
            name: "again",
            type: "confirm",
            message: "Would you like to play another match?"
        }).then(function (answer) {
            if (answer.again === true) {
                roundNumber = 0;
                PlayGame();
            } else {
                console.log("Come back again soon!");
            };
        });
    };
};






















// var newplayerName = process.argv[2];
// var newplayerPosition = process.argv[3];
// var newplayerOffense = process.argv[4];
// var newplayerDefense = process.argv[5];

// var createInitTeam = function () {
//     var starter1 = function () {
//         var skills = new Player("Tim", "Center", 4, 4);
//     };
//     var starter2 = function () {
//         var skills = new Player("John", "Guard", 4, 4);
//     };

//     var bench = function () {
//         var rookie = new Player("Kevin", "Forward", 1, 1);
//     };
//     starter1();
//     starter2();
//     bench();
// };

// var createPlayer = function () {
//     if (newplayerName === undefined) {
//         console.log("Your initial team is below! You may create additional players at any time!")
//     } else {
//         var userPlayer = new Player(newplayerName, newplayerPosition, newplayerOffense, newplayerDefense);
//     };
// };

// createPlayer();
// createInitTeam();