// require neccesary route files.
const router = require('express').Router();
const userRoutes = require('./userRoutes');

// export routes
router.use('/users', userRoutes);


module.exports = router;