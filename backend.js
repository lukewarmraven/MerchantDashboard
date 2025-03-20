// to connect to the MySQL Database
import mysql from 'mysql2';
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'raven',
    database:'merchantdash'
}).promise();



// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: 'localhost',
//     database: 'merchatndash',
//     user:'root',
//     password:'raven'
// });
// con.connect(function(err){
//     if (err){
//         console.error('Error connecting: ' + err.stack);
//         return;
//     }
//     console.log('Connected!' + con.threadId);
// })