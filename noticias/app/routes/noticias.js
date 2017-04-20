module.exports = (app) => {
    app.get('/noticias', (req, res) => {
        let connection = app.config.dbConnection();
        let noticiasModel = new app.app.models.noticiasModel(connection);

        noticiasModel.getNoticias((err, result) => {
            res.render("noticias/noticias", { noticias: result });
        });
    });

    app.get('/noticia/:id', (req, res) => {
        let connection = app.config.dbConnection();
        let noticiasModel = new app.app.models.noticiasModel(connection);
        let id = req.params.id;

        noticiasModel.getNoticia(id, (err, result) => {
            res.render("noticias/noticia", { noticia: result });
        });

    });
}
