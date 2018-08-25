var fs = require("fs");

var operand = process.argv[2];
var amount = process.argv[3];

if (operand === "total") {
    total();
} else if (operand === "deposit") {
    deposit();
} else if (operand === "withdraw") {
    withdraw();
} else if (operand === "lotto") {
    lotto();
} else {
    console.log("This bank doesn't perform this function")
};

function total() {
    fs.readFile("bank.txt", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        };
        data = data.split(", ");
        var runningTotal = 0;
        for (let i = 0; i < data.length; i++) {
            runningTotal += parseFloat(data[i]);
        };
        console.log("Your Total account contains $" + runningTotal.toFixed(2));
    });
};

function deposit() {
    fs.appendFile("bank.txt", ", " + amount, function (err) {
        if (err) {
            return console.log(err);
        };
        console.log("You have successfully deposited $" + amount);
        total();
    });
};

function withdraw() {

    fs.appendFile("bank.txt", ", -" + amount, function (err) {
        if (err) {
            return console.log(err);
        };
        console.log("You have successfully withdrawn $" + Math.abs(amount));
        total();
    });
};

function lotto() {
    fs.appendFile("bank.txt", ", -5", function (err) {
        if (err) {
            return console.log(err);
        };
        var jackpot = Math.floor(Math.random() * 10);
        console.log(jackpot);
        if (jackpot === 5) {
            fs.appendFile("bank.txt", ", 1000", function (err) {
                if (err) {
                    return console.log(err);
                };
                console.log("Congratulations!! You won the lottery!");
                total();
            });
        } else {
            console.log("You have lost the lottery... And $5");
            total();
        };
    });
};