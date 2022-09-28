const mysql = require('mysql');
const constants = require('../constants/index');
const connection = mysql.createConnection(constants.db);

connection.connect((err) => {
    if (err) throw err;
    console.log("Database connected!");
})

module.exports = connection;