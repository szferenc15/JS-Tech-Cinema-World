const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
require('./authentication/passportConfig');

const app = express();

const appRouter = require('./routing');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({extended: false}))
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'almafa 42',
}));
app.use(passport.initialize());
app.use(passport.session());

/*
app.use((req, res, next) => {
  console.log(new Date());
  next();
  console.log(new Date());
})
*/

app.use((req, res, next) => {
  console.log(req.method, req.url, JSON.stringify(req.body));
  next();
})

app.use('/api', appRouter);

app.listen(PORT, () => console.log(`App is listening on: ${PORT}`));