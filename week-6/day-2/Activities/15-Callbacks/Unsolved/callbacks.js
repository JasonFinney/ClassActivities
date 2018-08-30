var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function something(str, cb) {
    console.log(str);
    cb();
};

// Write a function that runs a function argument if
// its other argument is truthy.
function otherThing(truthy, cb) {
    if (truthy) {
        console.log(truthy);
        cb();
    };
};

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function thirdThing(value, cb) {
    return function () {
        return cb(value);
    };
};

var foo = thirdThing(21, function (a) { console.log(a); })
foo();

sum(5)(10)

function sum(a) {
    return function (b) {
        return a + b;
    };
};

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
var callback = function (err) {
    if (err) {
        console.log(err);
    };
    console.log("I might understand this");
};
fs.writeFile('log.txt', 'Hello Node.js', 'utf8', callback);