const router = require('express').Router();
const {
  createThought,
  getAllThoughts,
  getThoughtById,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(createThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// router.route('/:userId');

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
