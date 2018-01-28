const Router = require('express').Router;

const friendsRouter = require('./friends');
const postsRouter = require('./posts');

const authenticatedRoutes = new Router();

authenticatedRoutes.use('/friends', friendsRouter);
authenticatedRoutes.use('/posts', postsRouter);

module.exports = authenticatedRoutes;
