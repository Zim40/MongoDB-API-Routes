const { User, Thoughts, Reaction } = require('../models');
const mongoose = require('mongoose');

module.exports = {
    async postReact (req, res) {
        try {
            // post react code
            const thoughtId = req.params.thoughtId;
            const  reactionBody  = req.body;
            const addReact = await Thoughts.findOneAndUpdate(
                { _id: thoughtId },
                { $addToSet: {reactions: reactionBody }},
                { new: true }
            );
            console.log(thoughtId);
            if(!addReact) {
                return res.status(404).json({message: 'Failure: No Reaction added!'});
            };
            res.json(addReact);
        } catch (err) {
            res.status(500).json({message: 'Unable to post Reaction'});
        }
    },
    async deleteReact (req, res) {
        try {
            // delete react code
            if (!mongoose.isValidObjectId(req.params.reactionId)) {
                return res.status(400).json({ message: 'Invalid reaction ID' });
              } else {
                console.log(req.params.reactionId);
              }
              const thoughtId = req.params.thoughtId;
              const reactionId = req.params.reactionId;
              

            const reaction = await Thoughts.findOneAndUpdate(
                thoughtId,
                { $pull: { reactions: {_id: reactionId } } },
                { new: true }
            );
            console.log(reaction); 

            if(!reaction) {
                return res.status(404).json({message: 'Reaction not found!'});
            };

            res.json({message: 'Reaction Deleted!'})
        } catch (err) {
            console.log(err);
            res.status(500).json({message: 'Delete Failed, please try again!'});
        }
    }
};


