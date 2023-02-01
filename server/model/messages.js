const Mongoose = require("mongoose");

const { Schema } = Mongoose;

const messages = new Schema(
  {
    fromUserName: Mongoose.ObjectId,
    toUserName: Mongoose.ObjectId,
    messagesTest: String,
  },
  { timestamps: true }
);

module.exports = Mongoose.model("messages", messages);
