
const Router = require('express').Router;
const usersRouter = require('./usersRouter');

const appRoutes = new Router();

appRoutes.use('/users', usersRouter);

module.exports = appRoutes;