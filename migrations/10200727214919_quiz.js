exports.up = function(knex) {
	return knex.schema.createTable('quiz', (t) => {
		t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
		t.string('name').notNullable(); // this is a column.
		t.string('description');
	});
};
exports.down = function(knex) {
	return knex.schema.dropTableIfExists('quiz');
};
