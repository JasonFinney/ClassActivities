// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder");

var city = process.argv[2];
var state = process.argv[3];

var place = city + state;

geocoder.geocode(place, function (err, data) {
    console.log(JSON.stringify(data.results[0].geometry.location, null, 1));
});





// Take in the command line arguments




// Build your address as an array or string




// Then use Geocoder NPM to geocode the address
