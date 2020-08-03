exports.up = function(knex) {
	return knex.schema.createTable('question', (table) => {
		table.increments();
		table.string('prompt').unique();
		table.specificType('answers', 'VARCHAR[]').unique();
		table.integer('correctIndex').unique();
		table.string('quizName');
		table.foreign('quizName').references('quiz.name');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('question');
};
