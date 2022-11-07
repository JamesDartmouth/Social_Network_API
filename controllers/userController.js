// const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  getAllUsers(req, res) {
    User.find()
         // .populate({path: 'thoughts',select: '-__v'})
    //   .populate({path: 'friends', select: '-__v'})
      //.select('-__v')
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      // .populate({path: 'thoughts',select: '-__v'})
    //   .populate({path: 'friends', select: '-__v'})
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },



  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((use) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },


  // Add a reaction---------freinds:params.friendId
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: req.body } },
      { new: true, runValidators: true }
    )
      // .populate({path: 'friends', select: '-__v'})
      // .select('-__v')

      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a Reaction--------freinds:params.friendId..req.body
  deleteFriend(req, res) {
    User.findOneAndDelete(
      { _id: req.params.userId },
      { $pull: { friends: { friendId: params.friendId } } },
      { new: true })
 // .populate({path: 'friends', select: '-__v'})
      // .select('-__v')

      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

};
