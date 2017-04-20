module.exports = (app) => {
    app.get('/noticias/nova', (req, res) => {
        res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
    });

    app.post('/noticias/salvar', (req, res) => {
        let noticia = req.body;

        /* Validator nos campos */
        req.assert('titulo', 'O título é obrigatório.').notEmpty();
        req.assert('resumo', 'O resumo é obrigatório.').notEmpty();
        req.assert('resumo', 'Um resumo mínimo de 10 e máximo de 100 caracteres').len(10, 100);
        req.assert('autor', 'O nome do autor é obrigatório.').notEmpty();
        req.assert('data', 'A data é obrigatória.').notEmpty().isDate({ format: 'YYYY-MM-DD' });
        req.assert('noticia', 'Campo não pode ser vazio.').notEmpty();

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
    });
}