const UserProfile = require("../model/userProfile");

exports.setProfile = async (req, res, next) => {
  const name = req.body.name;
  const userName = req.body.userName;

  const userProfile = await new UserProfile({ name: name, userName: userName });
  await userProfile.save();
  return res.status(201).json("profile updated");
};
