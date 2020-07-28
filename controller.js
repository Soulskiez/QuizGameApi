const db = require('./db.js');

exports.create = (req, res) => {
	if (!req.body.title) {
		res.status(400).send({
			message: 'Content can not be empty!'
		});
		return;
	}
	const quiz = {
		name: req.body.name
	};
};

exports.findAll = (req, res) => {};

exports.findOne = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};

exports.deleteAll = (req, res) => {};
