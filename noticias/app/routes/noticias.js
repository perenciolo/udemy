module.exports = (app) => {
    app.get('/noticias', (req, res) => {
        app.app.controllers.noticias.listar(app, req, res);
    });

    app.get('/noticia/:id', (req, res) => {
        app.app.controllers.noticias.detalhe(app, req, res);
    });
}
