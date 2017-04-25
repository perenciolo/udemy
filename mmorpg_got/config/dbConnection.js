let mongo = require('mongodb');

/* Wrapper da conexão com o banco */
let connMongdoDB = function () {
    let db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //domínio de acesso ao banco
            27017, //porta do servidor
            {} //objeto de configurações extras
        ),
        {}
    );

    return db;
};

module.exports = connMongdoDB;