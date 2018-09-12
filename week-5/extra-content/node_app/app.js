require('dotenv').config();
var keys = require("./keys.js");

console.log(keys);

var Twitter = require('twitter');
var request = require('request');

var userInput = process.argv[2];
var twitterChoice = process.argv[3];
// if (userInput === 'tweets') {
//     tweets();
// } else if (userInput === 'movie') {
//     movieInfo();
// }


switch (userInput) {
    case 'tweets':
        tweets(twitterChoice);
        break;

    default:
        break;
}


// var client = new Twitter({
//     consumer_key: '',
//     consumer_secret: '',
//     access_token_key: '',
//     access_token_secret: ''
// });

// Twitter function
function tweets(name) {
    var client = new Twitter(keys.twitter);

    var params = { screen_name: name };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets[0].text);
        }
    });
}

// Movie Function
function movieInfo() {
    var urlHit =
        "http://www.omdbapi.com/?t=" + "titanic" + "&y=&plot=full&tomatoes=true&apikey=" + keys.omdb.api_key;

    request(urlHit, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });

}



