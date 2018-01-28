const Router = require('express').Router;

const authenticationRoutes = require('./auth');
const authenticatedRoutes = require('./authenticated');

const appRouter = new Router();

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.user);
    next();
  } else {
    res.sendStatus(403);
  }
}

appRouter.use('/', authenticationRoutes);
appRouter.use('/', isAuthenticated, authenticatedRoutes);

module.exports = appRouter;
