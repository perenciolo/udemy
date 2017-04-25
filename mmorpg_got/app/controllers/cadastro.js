module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', { validacao: {}, dadosForm: {} });
}

module.exports.cadastrar = function (application, req, res) {
    let dadosForm = req.body;

    req.assert('nome', 'Campo nome deve ser preenchido.').notEmpty();
    req.assert('usuario', 'Campo usuário deve ser preenchido.').notEmpty();
    req.assert('senha', 'Campo senha deve ser preenchido.').notEmpty();
    req.assert('casa', 'Campo casa deve ser preenchido.').notEmpty();

    let erros = req.validationErrors();

    if (erros) {
        res.render('cadastro', { validacao: erros, dadosForm: dadosForm });
        return;
    }

    let connection = application.config.dbConnection;
    let UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    UsuariosDAO.inserirUsuario(dadosForm);

    res.send('pode');
}