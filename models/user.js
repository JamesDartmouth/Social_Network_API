const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // use REGEX to validate correct email
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },

    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],

  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets the amount of user's friends
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
