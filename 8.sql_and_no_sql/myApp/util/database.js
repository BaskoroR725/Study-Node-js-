const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'asuszenfone5',
    port:3305
});

module.exports = pool.promise();