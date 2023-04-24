
const { User, Thoughts, Reaction } = require('../models');


// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list

module.exports = {
  async addFriend(req, res) {
    try {
      const userId = req.params.userId;
      const friendId = req.params.friendId;

      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { friends: friendId } },
        { new: true }
      );
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteFriend(req, res) {
    try {
        const userId = req.params.userId;
        const friendId = req.params.friendId;

        const  updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { $pull: { friends: friendId} },
            { new: true },
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
  }
};

// 6444cac2e77984481bfcdb8f johnny

// 644513cbac3450c40112bee1 james