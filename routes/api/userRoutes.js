const router = require('express').Router();
const  {
    getUser,
    getSingleUser,
    createUser
} = require('../../controller/userRoutes');

//  /api/users
router.route('/users').get(getUser).post(createUser);