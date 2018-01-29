const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;
const appRouter = require('./routing');

app.use(bodyParser.json({ extended: false }));
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: 'cinema_outer_world',
  }));
app.use((req, res, next) => {
	console.log(req.method, req.url, JSON.stringify(req.body));
	next();
});
app.use('/api', appRouter);

app.listen(PORT, () => console.log(`App is listening on: ${PORT}`));
