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

router.route('/').get(getAllThoughts);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route('/userId').post(createThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
