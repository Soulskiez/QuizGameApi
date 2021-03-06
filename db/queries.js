const knex = require('./db');

module.exports = {
	getAll(tableName) {
		return knex(tableName);
	},
	getById(id, tableName) {
		return knex(tableName).where('id', id);
	},
	create(quiz, tableName) {
		return knex(tableName).insert(quiz, '*');
	},
	update(id, quiz, tableName) {
		return knex(tableName).where('id', id).update(quiz, '*');
	},
	delete(id, tableName) {
		return knex(tableName).where('id', id).del();
	},
	getByQuestionsByQuizId(quizId, tableName) {
		return knex.select('id', 'prompt', 'answers', 'correctIndex').from(tableName).where('quiz_id', quizId);
	}
};
