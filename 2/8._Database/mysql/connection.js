require("dotenv").config();

const process = require("process");

let args = process.argv;

if (process.argv.includes("--createdb")) {
    console.log("createion mode activated");
}

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});
 
connection.connect();


connection.query('CREATE TABLE beers', function (error, results, fields) {
    if (error) {
        throw new Error();
    console.log("error happenend: " + error);
    }
  });

