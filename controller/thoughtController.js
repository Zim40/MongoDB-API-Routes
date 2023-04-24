const { User, Thoughts, Reaction } = require('../models');


// GET to get all thoughts
// GET to get a single thought by its _id
// POST to create a new Thoughts(Dont forget to push the created thought's _id to the associated users's thoughts array field)
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id
module.exports = {

    // GET
    async getThoughts(req, res) {
        // try-catch block
        try {
            const thoughts = await Thoughts.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // GET
    async getSingleThought(req, res) {
        // try-catch block
        try {
            const thoughtId = req.params.thoughtId
            const thought = await Thoughts.findById({ _id: thoughtId });
            
            if(!thought) {
                return res.status(404).json({message: 'No thought with that id!'});
            };
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // POST
    async createThought(req, res) {
        // try-catch block
        try {
            const  { userId, username, thoughtText } = req.body;
            const thought = await Thoughts.create({ username, thoughtText });
            await thought.save();

            await User.findByIdAndUpdate(userId,  {$push: { thoughts: thought._id }})
            res.status(201).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }

    },

    // PUT
    async updateThought(req, res) {
        // try-catch block
        try {
            const thoughtId = req.params.thoughtId;
            const updatedThought = req.body;
            const newThought = await Thoughts.findOneAndUpdate(
                { _id: thoughtId },
                updatedThought,
                { new: true }

            );
            if(!newThought) {
                return res.status(404).json('Thought Not Found!');
            };

            res.json(newThought);
            console.log(newThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    // DELETE
    async deleteThought(req, res) {
        // try-catch block
        try {
            const thought = await Thoughts.findOneAndRemove({ _id: req.params.thoughtId })
            if(!thought) {
                return res.status(404).json({message: 'No thought by that id!'});
            }
            res.json({message: 'Thought Deleted!'});
        } catch (err) {
            res.status(500).json(err);
          }
    },
    
};


// "_id": "6445ee505b04a2de43e9b1fc",
		// "thoughtText": "Here's a cool thought...",
		// "username": "Johnny",
		// "createdAt": "2023-04-24T02:49:52.214Z",
		// "reactions": [],
		// "__v": 0,
		// "reactionCount": 0,
		// "formattedDate": "24/04/2023",
		// "id": "6445ee505b04a2de43e9b1fc"