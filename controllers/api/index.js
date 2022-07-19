const router = require('express').Router();
// import data
const userRoutes = require('./user-routes.js');

// create routes
router.use('/users', userRoutes);


module.exports = router;