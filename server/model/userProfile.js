const Mongoose = require("mongoose");

const { Schema } = Mongoose;

const userProfileSchema = new Schema(
  {
    name: String,
    userName: String,
    // profilePicturePath: String,
    userId: String,
  },
  { timestamps: true }
);

module.exports = Mongoose.model("UserProfile", userProfileSchema ,"UserProfile" );
