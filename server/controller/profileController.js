const UserProfile = require("../model/userProfile");
const { validationResult } = require("express-validator");

exports.setProfile = async (req, res, next) => {
  const validationError = validationResult(req);
  if (validationError.isEmpty()) {
    const name = req.body.name;
    const userName = req.body.userName;
    const userId = req.body.userId;

    const checkUserName = UserProfile.find({userId: userId,userName: userName});
    if(checkUserName){
      console.log("User name already taken ")
      return res.status(400).json({msg: "User name already taken "})
    }

    const userProfile = await new UserProfile({
      name: name,
      userName: userName,
      userId: userId
    });
    await userProfile.save();
    return res.status(201).json("profile updated");
  } else {
    return res.json("fill the input");
  }
};
