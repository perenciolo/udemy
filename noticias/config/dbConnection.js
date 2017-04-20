let mysql = require('mysql');

var connMySQL = () => mysql.createConnection({ host: 'localhost', user: 'root', password: 'root', database: 'portal_noticias' });

module.exports = () => connMySQL;
