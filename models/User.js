const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: 'Please provide a username',
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: 'Please provide a username',
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a proper email address',
      ],
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total count of friends using virtuals setting
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// create User model using UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;
