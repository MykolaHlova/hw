const mysql2 = require('mysql2');

const pool = mysql2.createPool( {
    host: 'localhost',
    user: 'root',
    password: '333k333h333m',
    database: 'lun'
});

module.exports = pool;