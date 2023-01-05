const User = require("../model/userProfile");

exports.setProfile = (req, res, next) => {
  const name = req.body.name;
  const userName = req.body.userName;
  console.log(`ping:${userName}`);
};
