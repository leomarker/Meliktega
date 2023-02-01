const Profile = require("../model/profile");
const { validationResult } = require("express-validator");

exports.setProfile = async (req, res, next) => {
  const validationError = validationResult(req);
  if (validationError.isEmpty()) {
    const name = req.body.name;
    const userName = req.body.userName;
    const userId = req.body.userId;

    const checkUserName = await Profile.find({
      userId: userId,
      userName: userName,
    });
    console.log(checkUserName);
    if (checkUserName) {
      console.log("User name already taken ");
      return res.status(400).json({ msg: "User name already taken " });
    }

    const userProfile = await new Profile({
      name: name,
      userName: userName,
      userId: userId,
    });
    await userProfile.save();
    return res.status(201).json("Profile updated");
  } else {
    return res.json("fill the input");
  }
};
