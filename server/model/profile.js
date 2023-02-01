const Mongoose = require("mongoose");

const { Schema } = Mongoose;

const profileSchema = new Schema(
  {
    name: String,
    userName: String,
    // profilePicturePath: String,
    userId: String,
  },
  { timestamps: true }
);

module.exports = Mongoose.model("Profile", profileSchema);
