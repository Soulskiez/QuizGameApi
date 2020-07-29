const knex = require('./db');

module.exports = {
	getAll() {
		return knex('quiz');
	},
	getByName(name) {
		return knex('quiz').where('name', name);
	},
	createQuiz(quiz) {
		return knex('quiz').insert(quiz, '*');
	},
	updateQuiz(id, quiz) {
		return knex('quiz').where('id', id).update(quiz, '*');
	},
	delete(id) {
		return knex('quiz').where('id', id).del();
	}
};
