const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

const isValidQuiz = (quiz) => {
	//When actual quiz data is in DB, fix this.
	return quiz.name ? true : false;
};

router.get('/', (req, res) => {
	queries.getAll('quiz').then((quizzes) => {
		res.json(quizzes);
	});
});

router.get('/:id', async (req, res, next) => {
	const quiz = await queries.getById(req.params.id, 'quiz');
	if (quiz) {
		const questions = await queries.getByQuestionsByQuizId(req.params.id, 'question');
		let quizWithQuestion = quiz[0];
		quizWithQuestion.questions = questions;
		res.json(quizWithQuestion);
	} else {
		next();
	}
});

router.post('/', (req, res, next) => {
	if (isValidQuiz(req.body)) {
		queries.create(req.body, 'quiz').then((quiz) => {
			res.json(quiz[0]);
		});
	} else {
		next(new Error('Invalid Quiz!'));
	}
});

router.put('/:id', (req, res, next) => {
	try {
		queries.update(req.params.id, req.body, 'quiz').then((quiz) => {
			res.json(quiz[0]);
		});
	} catch (e) {
		console.log(e);
	}
});

router.delete('/:id', (req, res, next) => {
	queries.delete(req.params.id, 'quiz').then(() => {
		res.json({
			deleted: true
		});
	});
});

module.exports = router;
