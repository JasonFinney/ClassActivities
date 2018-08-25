// TODO Grab the request package...
// @link https://www.npmjs.com/package/request
var request = require("request");
// Run the request function...
// The request function takes in a URL then returns three arguments:
// 1. It provides an error if one exists.
// 2. It provides a response (usually that the request was successful)
// 3. It provides the actual body text from the website <---- what actually matters.
// request("https://en.wikipedia.org/wiki/Kudos_(granola_bar)", function (error, response, body) {

//   // If the request was successful...
//   if (!error && response.statusCode === 200) {

//     // Then log the body from the site!
//     console.log(body);
//   }
// });

var request = require('request');
request('http://www.espn.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
