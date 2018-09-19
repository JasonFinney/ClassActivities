// create a fuction 
// named difference
// takes inputs (numeric)
// outputs the differences of the inputs
function difference(a, b) {
    return a - b;
}

console.log(difference(1, 0));

// create a function
// names wholeName
// takes three inputs (first, middle, last)
// outputs a string with all three inputs concatenated
// with a space between each
function wholeName(first, middle, last) {
    return first + " " + middle + " " + last;
}

var result = wholeName("Jorge", "I don't have a middle name", "Hernandez");
console.log(result);

// create a function
// that takes one input (string)
// outputs the reverse of the input

function reverse(word) {
    return word.split("").reverse().join("");
} 