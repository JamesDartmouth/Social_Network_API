const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// GET all and POST/api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// GET one, PUT, and DELETE/api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;