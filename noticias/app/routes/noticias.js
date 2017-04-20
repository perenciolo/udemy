module.exports = (app) => {
    app.get('/noticias', (req, res) => {
        let connection = app.config.dbConnection();
        let noticiasModel = new app.app.models.noticiasModel(connection);

        noticiasModel.getNoticias((err, result) => {
            res.render("noticias/noticias", { noticias: result });
        });
    });
}
