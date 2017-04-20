module.exports = (app) => {
    app.get('/noticias', (req, res) => {
        let noticiasModel = app.app.models.noticiasModel;
        let connection = app.config.dbConnection();

        noticiasModel.getNoticias(connection, (err, result) => {
            res.render("noticias/noticias", { noticias: result });
        });
    });
}
