const router = require('express').Router();
const { User, Thoughts, Reaction } = require('../../models')
const  {
    getUser,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require('../../controller/usercontroller');

//  /api/users
router.route('/').get(getUser).post(createUser);

router.route('/:userId')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);


module.exports = router;