// to connect to the MySQL Database
import mysql from 'mysql2';
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'raven',
    database:'merchantdash'
}).promise();

async function getItems(){
    // stores the first item in the returned array and store it in another array in result
    const [result] = await pool.query("select * from itemtable;");
    return result;
}

const items = await getItems();
console.log(items);



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