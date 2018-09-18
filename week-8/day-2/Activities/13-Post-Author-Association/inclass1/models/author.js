module.exports = function (sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Author.associate = function (models) {
    Author.hasMany(models.Post, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Author;
};
