// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please introduce yourself"
    },

    {
        type: "list",
        name: "yourBusiness",
        message: "Please state your business in my terminal",
        choices: ["Just checking the place out", "No lie dude. I'm here for your data.", "Uh. This is my terminal... Who are YOU???"]
    },

    {
        type: "checkbox",
        name: "bring",
        message: "What are you carrying in your hands??",
        choices: ["camera", "Iphone", "nothing"]
    },

    {
        type: "confirm",
        name: "canLeave",
        message: "Can you leave now?"
    },

    {
        type: "password",
        name: "myPassword",
        message: "Okay fine. You can stay. But only if you say the magic password."
    }

]).then(function (user) {

    // If the user guesses the password...
    if (user.myPassword === "myTerminal") {

        console.log("==============================================");
        console.log("");
        console.log("Well a deal's a deal " + user.name);
        console.log("You can stay as long as you like.");
        console.log("Just put down the " + user.bring.join(" and ") + ". It's kind of freaking me out.");
        console.log("");
        console.log("==============================================");
    }


    // If the user doesn't guess the password...
    else {

        console.log("==============================================");
        console.log("");
        console.log("Sorry " + user.name);
        console.log("I'm calling the cops!");
        console.log("");
        console.log("==============================================");

    }
})