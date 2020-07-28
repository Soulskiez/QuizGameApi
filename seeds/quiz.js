exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('quiz').del().then(function() {
		// Inserts seed entries
		return knex('quiz').insert([ { id: 1, name: 'quiz1' }, { id: 2, name: 'quiz2' }, { id: 3, name: 'quiz3' } ]);
	});
};
