module.exports = (app) => {
    app.get('/noticias/nova', (req, res) => {
        app.app.controllers.admin.formulario_inclusao_noticia(app, req, res);
    });

    app.post('/noticias/salvar', (req, res) => {
        app.app.controllers.admin.noticias_salvar(app, req, res);
    });
}