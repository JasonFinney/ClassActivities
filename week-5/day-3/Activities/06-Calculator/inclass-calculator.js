var a = Number(process.argv[2]);
var b = Number(process.argv[3]);
var c = process.argv[4];

function operate(a, b, c) {
    if (c === "add") {
        console.log(a + b);
    } else if (c === "sub") {
        console.log(a - b);
    } else if (c === "mult") {
        console.log(a * b);
    } else if (c === "divide") {
        console.log(a / b);
    } else if (c === "remainder") {
        console.log(a % b);
    } else if (c === "power") {
        console.log(Math.pow(a, b));
    } else if (c === "algebra") {
        console.log("I don't know what this does");
    } else {
        console.log("Please enter better arguments");
    };
}

operate(a, b, c);