module.exports = function (sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
        text: DataTypes.STRING,
        complete: DataTypes.STRING
    });
    return Todo;
}