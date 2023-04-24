const { User, Thoughts, Reaction } = require('../models');


module.exports = {
    async postReact (req, res) {
        try {
            // post react code
        } catch (err) {
            res.status(500).json({message: 'Unable to post Reaction'});
        }
    },
    async deleteReact (req, res) {
        try {
            // delete react code
        } catch (err) {
            res.status(500).json({message: 'Delete Failed, please try again!'});
        }
    }
}