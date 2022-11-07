const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// GET all and POST /api/users
router.route('/').get(getAllUsers).post(createUser);

// GET One, PUT and DELETE /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);


// /api//users/:userId/friends/:friendId"
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);;


module.exports = router;