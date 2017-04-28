var ObjectID = require('mongodb').ObjectId;

function JogoDAO(connection) {
    this._connection = connection();
}

JogoDAO.prototype.gerarParametros = function(usuario) {
    this._connection.open(function(err, mongoclient) {
        mongoclient.collection("jogo", function(err, collection) {
            collection.insert({
                usuario: usuario,
                moeda: 15,
                suditos: 10,
                temor: Math.floor(Math.random() * 1001),
                sabedoria: Math.floor(Math.random() * 1001),
                comercio: Math.floor(Math.random() * 1001),
                magia: Math.floor(Math.random() * 1001)
            });

            mongoclient.close();
        });
    });
}

JogoDAO.prototype.initGame = function(usuario, casa, msg, res) {
    this._connection.open(function(err, mongoclient) {
        mongoclient.collection("jogo", function(err, collection) {
            collection.find({ usuario: usuario }).toArray(function(err, result) {
                res.render('jogo', { imgCasa: casa, jogo: result[0], msg: msg });
            });

            mongoclient.close();
        });
    });
}

JogoDAO.prototype.acao = function(acao) {
    this._connection.open(function(err, mongoclient) {
        mongoclient.collection("acao", function(err, collection) {

            var date = new Date();
            var tempo = null;

            switch (parseInt(acao.acao)) {
                case 1: tempo = 1 * 60 * 60000; break;
                case 2: tempo = 2 * 60 * 60000; break;
                case 3: tempo = 5 * 60 * 60000; break;
                case 4: tempo = 5 * 60 * 60000; break;
            }

            acao.acaoTerminaEm = date.getTime() + tempo;

            collection.insert(acao);

        });

        mongoclient.collection("jogo", function(err, collection) {

            var moedas = null;

            switch (parseInt(acao.acao)) {
                case 1: moedas = -2 * acao.quantidade; break;
                case 2: moedas = -3 * acao.quantidade; break;
                case 3: moedas = -1 * acao.quantidade; break;
                case 4: moedas = -1 * acao.quantidade; break;
            }

            collection.update(
                { usuario: acao.usuario },
                { $inc: { moeda: moedas } }
            );

            mongoclient.close();
        });
    });
}

JogoDAO.prototype.getAcoes = function(usuario, res) {
    this._connection.open(function(err, mongoclient) {
        mongoclient.collection("acao", function(err, collection) {
            collection.find({ usuario: usuario, acaoTerminaEm: { $gt: new Date().getTime() } }).toArray(function(err, result) {
                res.render('pergaminhos', { acoes: result });
            });

            mongoclient.close();
        });
    });
}

JogoDAO.prototype.revogarAcao = function(id, res) {
    this._connection.open(function(err, mongoclient) {
        mongoclient.collection("acao", function(err, collection) {
            collection.remove(
                { _id: ObjectID(id) },
                function(err, result) {
                    res.redirect('/jogo?msg=R');
                    mongoclient.close();
                }
            );
        });
    });
}

module.exports = function() {
    return JogoDAO;
}