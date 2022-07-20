const router = require('express').Router();
// import data
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes')
const categoryRoutes = require('./category-routes')

// create routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/categories', categoryRoutes);


module.exports = router;