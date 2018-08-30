var category = process.argv[2].toLowerCase();
var input = process.argv.slice(3).join(" ");

if (category === "show") {
    console.log("Show");
    console.log(input);
    findTVshow(input);
} else if (category === "actor") {
    console.log("Actor");
    console.log(input);
    findActor(input);
} else {
    console.log("Please enter a valid command");
}
