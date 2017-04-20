module.exports.listar = function (app, req, res) {
    let connection = app.config.dbConnection();
    let noticiasModel = new app.app.models.noticiasModel(connection);

    noticiasModel.getNoticias((err, result) => {
        res.render("noticias/noticias", { noticias: result });
    });
}

module.exports.detalhe = function (app, req, res) {
    let connection = app.config.dbConnection();
    let noticiasModel = new app.app.models.noticiasModel(connection);
    let id = req.params.id;

    noticiasModel.getNoticia(id, (err, result) => {
        res.render("noticias/noticia", { noticia: result });
    });
}