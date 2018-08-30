var inquirer = require("inquirer");

function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
    this.printInfo = function () {
        console.log(this);
    };
};
var count = 0;
function getUserInput() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is your name?"
        }, {
            name: "position",
            message: "What is your current position?"
        }, {
            name: "age",
            message: "How old are you?"
        }, {
            name: "language",
            message: "What is your favorite programming language?"
        }
    ]).then(function (input) {
        var newProgrammer = new Programmer(input.name, input.position, input.age, input.language);
        // printInfo method is run to show that the newProgrammer object was successfully created and filled
        newProgrammer.printInfo();
        if (count < 2) {
            count++;
            getUserInput();
        };
    })
};
getUserInput();