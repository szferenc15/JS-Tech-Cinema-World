
const Router = require('express').Router;
const appRoutes = new Router();

const userRouter = require('./userRouter');
const cinemaRouter = require('./cinemaRouter');
const filmRouter = require('./filmRouter');
const cinemaFilmRouter = require('./cinemaFilmRouter');
const trailerRouter = require('./trailerRouter');

appRoutes.use('/user', userRouter);
appRoutes.use('/cinema', cinemaRouter);
appRoutes.use('/film', filmRouter);
appRoutes.use('/cinemaFilm', cinemaFilmRouter);
appRoutes.use('/trailer', trailerRouter);

module.exports = appRoutes;