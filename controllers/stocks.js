const connection = require('../util/database');
const path = require('path');
const req = require('express/lib/request');

exports.stockinput=(req,res,next) => {
    // connection.query(
    //     'SELECT * FROM `aapl`',
    //     function(err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //         console.log(fields); // fields contains extra meta data about results, if available
    //       }
    //   );
res.sendFile(path.join(__dirname,'..','views','stock_input.html'))
}

exports.getstockdata=(req,res,next) => {
    connection.query(
        'SELECT * FROM `aapl` where `Date` = ?',
        [req.body.date],
        function(err, results, fields) {
           res.json(results);
          }
      );
}

