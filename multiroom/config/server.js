var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

/* Variáveis do sistema */
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
var server = app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));

/* Criando a conexão via websocket */
var io = require('socket.io').listen(server);

io.on("connection", function (socket) {

    socket.on('disconnect', function () {

    });

    socket.on('msgParaServidor', function (data) {
        socket.emit(
            'msgParaCliente',
            {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        );
        socket.broadcast.emit(
            'msgParaCliente',
            {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        );

        /* Participantes */
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit(
                'participantesParaCliente',
                {
                    apelido: data.apelido
                }
            );
            socket.broadcast.emit(
                'participantesParaCliente',
                {
                    apelido: data.apelido
                }
            );
        }
    });
});

app.set('io', io);

/* exportar objeto app */
module.exports = app;
