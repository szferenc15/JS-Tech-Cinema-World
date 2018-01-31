
const Router = require('express').Router;
const appRoutes = new Router();

const userRouter = require('./routers/userRouter');
const cinemaRouter = require('./routers/cinemaRouter');
const filmRouter = require('./routers/filmRouter');
const categoryRouter = require('./routers/categoryRouter');
const filmCategoryRouter = require('./routers/filmCategoryRouter');
const roomRouter = require('./routers/roomRouter');
const screeningRouter = require('./routers/screeningRouter');
const ticketRouter = require('./routers/ticketRouter');
const screeningTicketRouter = require('./routers/screeningTicketRouter');
const bookingRouter = require('./routers/bookingRouter');

appRoutes.use('/user', userRouter);
appRoutes.use('/cinema', cinemaRouter);
appRoutes.use('/film', filmRouter);
appRoutes.use('/category', categoryRouter);
appRoutes.use('/filmCategory', filmCategoryRouter);
appRoutes.use('/room', roomRouter);
appRoutes.use('/screening', screeningRouter);
appRoutes.use('/ticket', ticketRouter);
appRoutes.use('/screeningTicket', screeningTicketRouter);
appRoutes.use('/booking', bookingRouter);

module.exports = appRoutes;