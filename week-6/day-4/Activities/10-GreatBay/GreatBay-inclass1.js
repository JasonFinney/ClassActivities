var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "auction_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    introPrompt();
});

function introPrompt() {
    console.log("your in!");
    inquirer.prompt([
        {
            type: "list",
            name: "firstprompt",
            message: "Would you like to post an Item or bid on an item?",
            choices: ["Post?", "Bid?"],
        }
    ]).then(function (intro) {
        if (intro.firstprompt === "Post?") {
            console.log("you choose Post!");
            inquirer.prompt([
                {
                    type: "input",
                    name: "postItemInput",
                    message: "What is the name of the Item?",
                },
                {
                    type: "input",
                    name: "postBidInput",
                    message: "How much would you like to bid?",
                }
            ]).then(function (introPost) {
                var query = connection.query(
                    "INSERT INTO itemsTable SET ?",
                    {
                        item: introPost.postItemInput,
                        highestBid: introPost.postBidInput,
                        currentBid: introPost.postBidInput,
                    },
                    function (err, res) {
                        console.log(res.affectedRows + " Item Successfully Posted!");
                    }
                )
            })
        } else if (intro.firstprompt === "Bid?") {
            console.log("you choose Bid!");
            connection.query(
                "SELECT * FROM itemsTable;", function (err, res) {
                    if (err) throw err; console.log(res);
                    var optionarray = [];
                    for (let i = 0; i < res.length; i++) {
                        optionarray.push(res[i].item);
                    };
                    inquirer.prompt([
                        {
                            type: "list",
                            name: "availibleItems",
                            message: "Which item would you like to bid on?",
                            choices: optionarray
                        },
                        {
                            type: "input",
                            name: "newBid",
                            message: "Please enter your bid"
                        }
                    ]).then(function (answer) {
                        for (let p = 0; p < res.length; p++) {
                            var itemobj = {};
                            if (res[p].item === answer.availibleItems) {
                                itemobj = res[p];
                                if (itemobj.highestBid < answer.newBid) {
                                    console.log("You won the Auction!");
                                    connection.query(
                                        "UPDATE itemsTable SET ? WHERE ?",
                                        [
                                            {
                                                highestBid: answer.newBid
                                            },
                                            {
                                                item: answer.availibleItems
                                            }
                                        ],
                                    );
                                    connection.query(
                                        "UPDATE itemsTable SET ? WHERE ?",
                                        [
                                            {
                                                currentBid: answer.newBid
                                            },
                                            {
                                                item: answer.availibleItems
                                            }
                                        ],
                                    );
                                } else {
                                    console.log("Your bid was rejected. Bid higher next time!")
                                    connection.query(
                                        "UPDATE itemTable SET ? WHERE ?",
                                        [
                                            {
                                                currentBid: answer.newBid
                                            },
                                            {
                                                item: answer.availibleItems
                                            }
                                        ],
                                    );
                                }
                            }
                        }

                    })
                }
            )
        };
    });
};

