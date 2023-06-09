const router = require('express').Router();
const { User, Thoughts, Reaction } = require('../../models')

const  {
    getUser,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require('../../controller/usercontroller');

const {
    addFriend,
    deleteFriend
} = require('../../controller/friendController');


//  /api/users
router.route('/')
    .get(getUser)
    .post(createUser);

router.route('/:userId')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

// Add and delete friends
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;