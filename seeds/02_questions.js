exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('question').del().then(function() {
		// Inserts seed entries
		return knex('question').insert([
			{
				prompt: 'What number is 3?',
				answers: [ '1', '2', '3', '4' ],
				correctIndex: 2
				//quiz_id: 'quiz1'
			},
			{
				prompt: 'What number is 1?',
				answers: [ '5', '6', '7', '8' ],
				correctIndex: 0
				//quiz_id: 'quiz1'
			},
			{
				prompt: 'What number is A?',
				answers: [ 'a', 'b', 'c', 'd' ],
				correctIndex: 1
				//quizName: 'quiz1'
			}
		]);
	});
};
