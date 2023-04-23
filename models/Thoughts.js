const { Schema, model } = require('mongoose');
const  reactionSchema = require('./Reaction');

// Define thought Schema.
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    }, {
        toJSON: { 
            virtuals: true
        }
    }
);

// Virtual to return number of reactions.
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Virtual to return formatted Date.
thoughtSchema.virtual('formattedDate').get(function() {
    return this.createdAt.toLocaleDateString();
});

// Create instance of Thoughts model.
const Thoughts = model('thoughts', thoughtSchema);


module.exports = Thoughts;