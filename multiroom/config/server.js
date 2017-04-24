var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

/* views do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Middlewares */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

/* Autoload das pastas do projeto */
consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

/* Set da porta do servidor */
app.listen(80, () => console.log('Servidor rodando na porta 80.'));

/* exportar objeto app */
module.exports = app;
