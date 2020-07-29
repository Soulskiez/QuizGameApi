exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('quiz').del().then(function() {
		// Inserts seed entries
		return knex('quiz').insert([ { name: 'quiz1' }, { name: 'quiz2' }, { name: 'quiz3' } ]);
	});
};
