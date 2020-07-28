const express = require('express');
const app = express();
const quizzes = require('./api/quiz');
app.use('/api/quizzes', quizzes);

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
