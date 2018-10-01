var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "Drop Database sys"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});