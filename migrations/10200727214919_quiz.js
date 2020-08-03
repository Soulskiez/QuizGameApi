exports.up = function(knex) {
	return knex.schema.createTable('quiz', (table) => {
		table.increments(); // this represents the primary key.
		table.string('name').unique(); // this is a column.
		table.string('description');
	});
};
exports.down = function(knex) {
	return knex.schema.dropTableIfExists('quiz');
};
