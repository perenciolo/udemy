module.exports.render = function (app, req, res) {
    var dadosForm = req.body;

    req.assert('apelido', 'O campo apelido é obrigatório.').notEmpty();
    req.assert('apelido', 'O apelido deve ter de 3 a 15 caracteres.').len(3, 15);

    var erros = req.validationErrors();

    if (erros) {
        res.render('index', { validacao: erros });
        return;
    }

    app.get('io')
        .emit(
        'msgParaCliente',
        {
            apelido: dadosForm.apelido,
            mensagem: "Se conectou ao chat.",
            apelido_atualizado_nos_clientes: 0
        }
        );

    res.render('chat', { dados: dadosForm });
}