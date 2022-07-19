const router = require('express').Router();
// import data
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes')

// create routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);


module.exports = router;