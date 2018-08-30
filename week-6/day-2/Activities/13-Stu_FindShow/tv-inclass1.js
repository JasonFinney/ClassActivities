var request = require("request");
var fs = require("fs");

var TV = function () {
  this.findShow = function (show) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    request(URL, function (error, response, body) {
      if (!error) {
        var data = JSON.parse(body);
        console.log(data.name);
        fs.appendFile("./log.txt", "\n-----------------------New Show Search-----------------------" + "\nName: " + data.name + "\nGenres: " + data.genres.join(" ") + "\nAve Rating: " + data.rating.average + "\nNetwork: " + data.network.name + "\nSummary: " + data.summary);
        console.log(data.genres.join(" "));
        console.log("Average Rating: " + data.rating.average);
        console.log(data.network.name);
        console.log(data.summary);
      } else {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
      }
    });
  };
  this.findActor = function (actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    request(URL, function (error, response, body) {
      if (!error) {
        var data = JSON.parse(body);
        console.log(data[0].person.name);
        console.log(data[0].person.birthday);
        console.log(data[0].person.country.name);
        console.log(data[0].person.gender);
        console.log(data[0].person.url);
        fs.appendFile("./log.txt", "\n-----------------------New Actor Search-----------------------" + "\nName: " + data[0].person.name + "\nBirthday: " + data[0].person.birthday + "\nCountry: " + data[0].person.country.name + "\nGender: " + data[0].person.gender + "\nURL: " + data[0].person.url);
      } else {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
      }
    });
  };
};

module.exports = TV;
