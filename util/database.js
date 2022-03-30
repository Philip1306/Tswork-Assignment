const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'phil1306',
  database: 'tswork'
});

module.exports = connection;