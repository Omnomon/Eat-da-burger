var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "bcd18c86f566a4",
  password: "1922b46f",
  database: "heroku_7714e86b8b4ccfd"
});



connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
