module.exports.formulario_inclusao_noticia = function (app, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (app, req, res) {
    let noticia = req.body;

    /* Validator nos campos */
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'Noticia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }

    let connection = app.config.dbConnection();
    let noticiasModel = new app.app.models.noticiasModel(connection);

    noticiasModel.setNoticia(noticia, (err, result) => {
        res.redirect('/noticias');
    });
}