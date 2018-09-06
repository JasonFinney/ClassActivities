const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer(function (req, res) {
    var path = req.url;
    console.log(req.url);

    switch (path) {
        case "/":
            return displayPage("home.html", res, 200);
            break;
        case "/home":
            return displayPage("home.html", res, 200);
            break;
        case "/foods":
            return displayPage("fav_foods.html", res, 200);
            break;
        case "/movies":
            return displayPage("fav_movies.html", res, 200);
            break;
        case "/css":
            return displayPage("fav_css.html", res, 200);
            break;
        default:
            return displayPage("404.html", res, 404);
            break;
    };
});

var displayPage = function (page, res, status) {
    fs.readFile(__dirname + "/" + page, function (err, html) {
        res.writeHead(200, { status, "Content-Type": "text/html" });
        res.end(html);
    });
};

server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});
