
const Router = require('express').Router;
const appRoutes = new Router();

const userRouter = require('./userRouter');
const cinemaRouter = require('./cinemaRouter');
const filmRouter = require('./filmRouter');
const cinemaFilmRouter = require('./cinemaFilmRouter');
const trailerRouter = require('./trailerRouter');
const categoryRouter = require('./categoryRouter');
const filmCategoryRouter = require('./filmCategoryRouter');
const roomRouter = require('./roomRouter');
const screeningRouter = require('./screeningRouter');
const ticketRouter = require('./ticketRouter');
const screeningTicketRouter = require('./screeningTicketRouter');
const bookingRouter = require('./bookingRouter');
const userBookingRouter = require('./userBookingRouter');
const bookingTicketRouter = require('./bookingTicketRouter');

appRoutes.use('/user', userRouter);
appRoutes.use('/cinema', cinemaRouter);
appRoutes.use('/film', filmRouter);
appRoutes.use('/cinemaFilm', cinemaFilmRouter);
appRoutes.use('/trailer', trailerRouter);
appRoutes.use('/category', categoryRouter);
appRoutes.use('/filmCategory', filmCategoryRouter);
appRoutes.use('/room', roomRouter);
appRoutes.use('/screening', screeningRouter);
appRoutes.use('/ticket', ticketRouter);
appRoutes.use('/screeningTicket', screeningTicketRouter);
appRoutes.use('/booking', bookingRouter);
appRoutes.use('/userBooking', userBookingRouter);
appRoutes.use('/bookingTicket', bookingTicketRouter);

module.exports = appRoutes;