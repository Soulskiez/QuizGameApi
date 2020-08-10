exports.up = function(knex) {
	return knex.schema.createTable('question', (t) => {
		t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
		t.string('prompt').unique();
		t.specificType('answers', 'VARCHAR[]').unique();
		t.integer('correctIndex').unique();
		t.uuid('quiz_id').references('id').inTable('quiz').onUpdate('CASCADE').onDelete('CASCADE');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('question');
};
