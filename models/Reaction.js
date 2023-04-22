const { Schema, model } = require('mongoose');


const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// Virtual to return formatted Date.
reactionSchema.virtual('formattedDate').get(function() {
    return this.createdAt.toLocaleDateString();
});

module.exports = reactionSchema;