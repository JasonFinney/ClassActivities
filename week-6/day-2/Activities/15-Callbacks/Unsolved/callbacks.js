var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
var input = process.argv.slice(2).join(" ");
var console1 = function (input) {
    console.log(input);
};

// Write a function that runs a function argument if
// its other argument is truthy.
var arg = process.argv[2];
if (!arg) {
    console.log("Why don't you follow instructions?");
} else {
    console1();
};

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
var term = process.argv.slice(3).join(" ");
var console2 = function (arg) {
    if (arg > 1) {
        console.log(term);
    } else {
        console.log(input);
    };
}
console2();

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
fs.appendFile("./log.txt", "\nNew Entry" + input);
