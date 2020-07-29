exports.up = function(knex) {
	return knex.schema.createTable('quiz', (table) => {
		table.increments(); // this represents the primary key.
		table.string('name'); // this is a column.
		table.string('description');
		table.string('questionPrompt').references('prompt').inTable('question');
	});
};
exports.down = function(knex) {
	return knex.schema.dropTableIfExists('quiz');
};
