const UserProfile = require("../model/userProfile");
const { validationResult } = require("express-validator");

exports.setProfile = async (req, res, next) => {
  const validationError = validationResult(req);
  if (validationError.isEmpty()) {
    const name = req.body.name;
    const userName = req.body.userName;

    const userProfile = await new UserProfile({
      name: name,
      userName: userName,
    });
    await userProfile.save();
    return res.status(201).json("profile updated");
  } else {
    return res.json("fill the input");
  }
};
