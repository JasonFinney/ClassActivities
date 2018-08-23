var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    // var D = data.split(",");

    // for (let i = 0; i < D.length; i++) {
    console.log(data);
    // };
});