module.exports = (app) => {
    app.get('/noticia/:id', (req, res) => {
        let noticiasModel = app.app.models.noticiasModel;
        let connection = app.config.dbConnection();
        let id = req.params.id;

        noticiasModel.getNoticia(connection, id, (err, result) => {
            res.render("noticias/noticia", { noticia: result });
        });

    });
}
