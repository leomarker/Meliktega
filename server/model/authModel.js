const Mongoose = require("mongoose");

const { Schema } = Mongoose;

const userSchema = new Schema({
  email: String,
  password: String,
});

module.exports = Mongoose.model("User", userSchema);
