const Router = require('express').Router;

const userStore = require('../../authentication/userStore');

const postsRouter = new Router();

postsRouter.post('', function(req, res, next) {
  const reqBody = req.body;
  req.user.addPost(reqBody);
  res.sendStatus(200);
});

postsRouter.get('/:username', function(req, res, next) {
  const username = req.params.username;
  userStore.getUserByName(username, (err, user) => {
    if (user) {
      const posts = user.getPosts();
      const response = {
        posts,
      };
      res.json(response);
    } else {
      res.sendStatus(404);
    }
  });
});

postsRouter.get('/:username/:postId', function(req, res, next) {
  const username = req.params.username;
  userStore.getUserByName(username, (err, user) => {
    if (user) {
      const post = user.getPostById(req.params.postId);
      if (!post) {
        res.sendStatus(404);
      } else {
        res.json(post);
      }
    } else {
      res.sendStatus(404);
    }
  });
})

module.exports = postsRouter;
