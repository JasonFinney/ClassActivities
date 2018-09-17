var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Characters = sequelize.define("allcharacters", {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER
});

Characters.sync();

module.exports = Characters;