const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

const userStore = require('./userStore');
const hasher = require('./hasher');

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, function(username, password, done) {
  userStore.getUserByName(username, (err, user) => {
    if (err) {
      done(err);
    } else if (!user) {
      done(null, false, {message: 'Incorrect username'});
    } else {
      const passwordHash = hasher(password);
      if (user.authenticate(passwordHash)) {
        done(null, user);
      } else {
        done(null, false, {message: 'Incorrect password'});
      }
    }
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.getUserName());
});

passport.deserializeUser((username, done) => {
  userStore.getUserByName(username, (err, user) => {
    if (err) {
      done(err);
    } else {
      done(null, user);
    }
  });
});
