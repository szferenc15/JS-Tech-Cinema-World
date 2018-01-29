
const Router = require('express').Router;
const appRoutes = new Router();

const userRouter = require('./userRouter');
const cinemaRouter = require('./cinemaRouter');
const filmRouter = require('./filmRouter');

appRoutes.use('/users', userRouter);
appRoutes.use('/cinemas', cinemaRouter);
appRoutes.use('/films', filmRouter);

module.exports = appRoutes;