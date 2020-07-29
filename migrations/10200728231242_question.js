exports.up = function(knex) {
	return knex.schema.createTable('question', (table) => {
		table.increments();
		table.string('prompt').unique();
		table.specificType('answers', 'VARCHAR[]');
		table.integer('correctIndex');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('question');
};
