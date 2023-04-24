
const { User, Thoughts, Reaction } = require('../models');

/*
- GET all users
- GET a single user by _id and populated  thought and friend data
- POST a new user
- PUT to update a user by its _id
- DELETE to remove user by its _id
- BONUS remove a user's associated thoughts when deleted
*/

module.exports = {
  // Get all users
  async getUser(req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Get a  single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .exec();
      
      if (!user) {
        return res.status(404).json({ message: "No Student by that ID" });
      }
      res.json(user)
    
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Post a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No such user exists" });
      }

      const thoughts = await Thoughts.findOneAndUpdate(
        { username: req.params.userId },
        { $pull: { username: req.params.userId } },
        { new: true }
      );

      if (!thoughts) {
        return res.status(404).json({
          message: "User deleted, but no thoughts found",
        });
      }
      res.json({ message: "User Deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Updates a user based on the userId.
  async updateUser(req, res) {
    try {
      const userId = req.params.userId;
      const updatedUser = req.body;
      const newUser = await User.findOneAndUpdate(
        { _id: userId },
        updatedUser,
        {new: true }
      );
      res.json(newUser);
    }catch(err) {
      res.status(500).json(err);
    }
  }
};