const mysql = require('mysql');

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Root@03",
    database : "institute_management"
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("Database connected!");
})

module.exports = connection;