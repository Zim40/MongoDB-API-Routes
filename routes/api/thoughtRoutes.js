const router = require('express').Router();


const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controller/thoughtController');

const {
    postReact,
    deleteReact,
} = require('../../controller/reactions');

// api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

// /api/thoughts/:thoughts
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
    .post(postReact);
router.route('/:thoughtId/:reactionId')
    .delete(deleteReact);

module.exports = router;