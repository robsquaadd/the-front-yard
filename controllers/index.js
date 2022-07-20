const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dasboard-routes');
const categoryRoutes = require('./category-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('./categories', categoryRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;