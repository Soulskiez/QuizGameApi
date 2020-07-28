const express = require('express');
const app = express();
const db = require('./db.js'); // importing the db config

app.get('/quiz', async (req, res) => {
	const quiz = await db('quiz'); // making a query to get all todos
	res.json({ quiz });
});

const port = 8765;
app.listen(port, () => {
	console.log(`listening http://localhost:${port}`);
});
