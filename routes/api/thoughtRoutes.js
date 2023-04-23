const router = require('express').Router();


const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controller/thoughtController');


// api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);


router.route('/:thoughts')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);