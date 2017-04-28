function isLogado(req, res) {
	if (req.session.autorizado !== true) {
		res.render('index', { validacao: [{ param: "email", msg: "Faça o login para acessar", value: "<received input>" }] });
		return;
	}
}

module.exports.jogo = function (application, req, res) {
	isLogado(req, res);

	var msg = '';
	if (req.query.msg != '') {
		msg = req.query.msg;
	}

	var usuario = req.session.usuario;
	var casa = req.session.casa;

	var connection = application.config.dbConnection;
	var JogoDAO = new application.app.models.JogoDAO(connection);

	JogoDAO.initGame(usuario, casa, msg, res);
}

module.exports.logout = function (application, req, res) {
	req.session.destroy(function (err) {
		res.redirect('/');
	});
}

module.exports.suditos = function (application, req, res) {
	isLogado(req, res);
	res.render('aldeoes');
}

module.exports.pergaminhos = function (application, req, res) {
	isLogado(req, res);

	var connection = application.config.dbConnection;
	var JogoDAO = new application.app.models.JogoDAO(connection);

	var usuario = req.session.usuario;
	JogoDAO.getAcoes(usuario, res);

}

module.exports.ordenarAcaoSudito = function (application, req, res) {
	var dadosForm = req.body;

	req.assert('acao', 'A ação deve ser informada.').notEmpty();
	req.assert('quantidade', 'A quantidade deve ser informada.').notEmpty();

	var erros = req.validationErrors();

	if (erros) {
		res.redirect('jogo?msg=E');
		return;
	}

	var connection = application.config.dbConnection;
	var JogoDAO = new application.app.models.JogoDAO(connection);

	/* Adicionar relação entre o usuário e a ação*/
	dadosForm.usuario = req.session.usuario;
	JogoDAO.acao(dadosForm);

	res.redirect('jogo?msg=S');
}

module.exports.revogarAcao = function (application, req, res) {
	var id = req.params.id;

	var connection = application.config.dbConnection;
	var JogoDAO = new application.app.models.JogoDAO(connection);

	JogoDAO.revogarAcao(id, res);

}