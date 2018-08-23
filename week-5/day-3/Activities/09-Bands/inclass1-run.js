var consolebands = require("./inclass1-bands.js");

if (process.argv[2]) {
    var genre = process.argv[2];
};

for (var item in consolebands) {
    if (item === genre || genre === undefined) {
        console.log(consolebands[item] + "is a " + item + " band.");
    } else {
        console.log("Please enter real music");
    }
};

