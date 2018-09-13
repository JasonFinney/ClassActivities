var connection = require("./connection");

var orm = {
    select: function (colName, table) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [colName, table], function (err, results) {
            if (err) throw err;
            console.log(results);
        })
    },
    selectWhere: function (colName, table, colType, type) {
        var queryString = "select ?? from ?? where ??=?;";
        connection.query(queryString, [colName, table, colType, type], function (err, results) {
            if (err) throw err;
            console.log(results);
        })
    },
    selectAll: function (whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
        var queryString = "SELECT ?? FROM ?? AS tOne LEFT JOIN ?? AS tTWO ON tOne.?? = tTwo.??";
        connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function (err, results) {
            if (err) throw err;
            console.log(results);
        })
    }
}

module.exports = orm;