const Router = require('express').Router;

const userStore = require('../../authentication/userStore');

const friendsRouter = new Router();

friendsRouter.get('/', function(req, res, next) {
  const response = {
    friends: req.user.getFriends(),
  };
  res.json(response);
});

friendsRouter.post('/:username', function(req, res, next) {
  const friendUsername = req.params.username;
  userStore.getUserByName(friendUsername, (err, user) => {
    if (user) {
      req.user.addFriend(friendUsername);
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });

});

module.exports = friendsRouter;
