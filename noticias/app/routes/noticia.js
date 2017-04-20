module.exports = (app) => {
    app.get('/noticia/:id', (req, res) => {
        let connection = app.config.dbConnection();
        let noticiasModel = new app.app.models.noticiasModel(connection);
        let id = req.params.id;

        noticiasModel.getNoticia(id, (err, result) => {
            res.render("noticias/noticia", { noticia: result });
        });

    });
}
