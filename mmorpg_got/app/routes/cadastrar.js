module.exports = function (application) {
    application.post('/cadastrar', function (req, res) {
        application.app.controllers.cadastro.cadastrar(application, req, res);
    });
}