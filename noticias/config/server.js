var app = require('express')();
var consign = require('consign')();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.");
});

/* Routes com consign */
consign
    .include('./app/routes')
    .then('./config/dbConnection.js')
    .then('./app/models')
    .into(app);

module.exports = app;