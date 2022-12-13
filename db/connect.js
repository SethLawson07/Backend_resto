// get the client
const mysql      = require('mysql2');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'resto',
  //password : 's3kreee7'
  multipleStatements: true
});

// create the connection to database

const connect = () => {

    db.connect();
    db.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err){  return false   }
    else {
        db ? console.log("True") : console.log("False")
       // console.log('The solution is: ', rows[0].solution);
    }    
    });    
   // db.end();
}

module.exports = {connect,db}