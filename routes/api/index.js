// require neccesary route files.
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// export routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;