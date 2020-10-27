const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

const isValidQuestion = (question) => {
	//When actual question data is in DB, fix this.
	return question.prompt ? true : false;
};

router.get('/', (req, res) => {
	queries.getAll('question').then((questions) => {
		res.json(questions);
	});
});
// get questions by quiz id TODO
router.get('/:id', (req, res, next) => {
	queries.getById(req.params.id, 'question').then((question) => {
		if (question) {
			res.json(question);
		} else {
			next();
		}
	});
});

router.get('/quizId/:id', (req, res, next) => {
	queries.getByQuestionsByQuizId(req.params.id, 'question').then((questions) => {
		if (questions) {
			res.json(questions);
		} else {
			next();
		}
	});
});

router.post('/', (req, res, next) => {
	if (isValidQuestion(req.body)) {
		queries.create(req.body, 'question').then((question) => {
			res.json(question[0]);
		});
	} else {
		next(new Error('Invalid Question!'));
	}
});

router.put('/:id', (req, res, next) => {
	try {
		queries.update(req.params.id, req.body, 'question').then((question) => {
			res.json(question[0]);
		});
	} catch (e) {
		console.log(e);
	}
});

router.delete('/:id', (req, res, next) => {
	queries.delete(req.params.id, 'question').then(() => {
		res.json({
			deleted: true
		});
	});
});

module.exports = router;
