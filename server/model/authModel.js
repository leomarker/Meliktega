const Mongoose = require("mongoose");

const { Schema } = Mongoose;

const userSchema = new Schema(
  {
    email: String,
    password: String,
  },
  { timestamps: true }
);

module.exports = Mongoose.model("User", userSchema);
