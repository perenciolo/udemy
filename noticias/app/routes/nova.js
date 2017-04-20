module.exports = (app) => {
    app.get('/noticias/nova', (req, res) => {
        res.render("admin/form_add_noticia");
    });
}