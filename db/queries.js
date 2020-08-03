const knex = require('./db');

module.exports = {
	getAll(tableName) {
		return knex(tableName);
	},
	getByName(name, tableName) {
		return knex(tableName).where('name', name);
	},
	create(quiz, tableName) {
		return knex(tableName).insert(quiz, '*');
	},
	update(id, quiz, tableName) {
		return knex(tableName).where('id', id).update(quiz, '*');
	},
	delete(id, tableName) {
		return knex(tableName).where('id', id).del();
	}
};
