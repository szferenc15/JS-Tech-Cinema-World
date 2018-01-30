const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;
const appRouter = require('./routing');

app.options("/*", function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	res.sendStatus(200);
});
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
