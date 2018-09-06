var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function Request(request1, response) {
    response.end("It Works!! Path Hit: " + request1.url + "  Everything you touch turns to gold!");
};
function handleRequest(request2, response) {
    response.end("It doesn't work!! Path Hit: " + request2.url + "  You are only a failure at the important things...");
};

var server1 = http.createServer(Request);
var server2 = http.createServer(handleRequest);

server1.listen(PORT1, function () {
    console.log("Server1 listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function () {
    console.log("Server2 listening on: http://localhost:" + PORT2);
});
