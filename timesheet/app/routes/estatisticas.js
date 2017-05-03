module.exports = function (application) {
    application.get('/estatisticas', function (req, res) {
        res.render('estatisticas');
    })
}