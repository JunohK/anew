var mysql = require("mysql");
const env = require("dotenv").config({ path:"../../.env"});

var connection = mysql.createConnection({
  host : process.env.host,
  port : process.env.port,
  user : process.env.user,
  password : process.env.password,
  database : process.env.database
})

// Select all rows from st_info table
let result = connection.query("SELECT * FROM st_info");
console.log(result);
