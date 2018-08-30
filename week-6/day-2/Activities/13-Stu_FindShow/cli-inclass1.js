var TV = require("./tv");

var tv = new TV();

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");


if (!search) {
  search = "show";
}

if (!term) {
  term = "Andy Griffith";
}

if (search === "show") {
  console.log("Searching for TV Show");
  tv.findShow(term);
} else if (search === "actor") {
  console.log("Searching for TV Actor");
  tv.findActor(term);
} else {
  console.log("Please enter a valid command");
}
