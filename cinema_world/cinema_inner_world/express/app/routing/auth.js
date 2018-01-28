const passport = require('passport');
const Router = require('express').Router;

const hasher = require('../authentication/hasher');
const userStore = require('../authentication/userStore');

const authRouter = new Router();

authRouter.post('/login', passport.authenticate('local', {
  successRedirect: '/api/friends',
  failureRedirect: '/api/login'
}));

authRouter.post('/register', (req, res) => {
  userStore.addUser({
    username: req.body.username,
    passwordHash: hasher(req.body.password),
  }, (err, user) => {
    if (err) {
      res.sendStatus(500);
    } else if (!user) {
      res.sendStatus(409);
    } else {
      res.send(JSON.stringify(user));
    }
  });

});

module.exports = authRouter;
