const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const quizzes = require('./api/quiz');
const questions = require('./api/question');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/quizzes', quizzes);
app.use('/api/questions', questions);

const port = 8765;
app.use(function(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: req.app.get('env') === 'development' ? err : {}
	});
});
app.listen(port, () => {
	console.log(`listening http://localhost:${port}`);
});

module.export = app;
