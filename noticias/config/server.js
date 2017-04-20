var app = require('express')();
var consign = require('consign')();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.");
});

/* Middlewares */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

/* Routes com consign */
consign
    .include('./app/routes')
    .then('./config/dbConnection.js')
    .then('./app/controllers')
    .then('./app/models')
    .into(app);

module.exports = app;