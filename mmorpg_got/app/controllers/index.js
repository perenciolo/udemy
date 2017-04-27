module.exports.index = function (application, req, res) {
	res.render('index', { validacao: {} });
}

module.exports.autenticar = function (application, req, res) {
	var dadosForm = req.body;


	req.assert('usuario', 'Campo usuário não pode ser vazio.').notEmpty();
	req.assert('senha', 'Campo senha não pode ser vazio.').notEmpty();
	let erros = req.validationErrors();

	if (erros) {
		res.render('index', { validacao: erros });
		return;
	}

	let connection = application.config.dbConnection;
	let UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	UsuariosDAO.autenticar(dadosForm, req, res);

	//res.render('jogo');

}
