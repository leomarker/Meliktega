const User = require("../model/user");
const Profile = require("../model/profile");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

require("dotenv").config();

exports.postSignup = async (req, res, next) => {
  const validationErrors = validationResult(req);

  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  if (validationErrors.isEmpty()) {
    const userExist = await User.findOne({ email: email });

    if (userExist === null) {
      const hashedPWD = await bcrypt.hash(password, 12);

      const user = new User({ email: email, password: hashedPWD });
      user
        .save()
        .then((res) => {
          console.log("user created");
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("got a hit");
      res.status(201).json({ msg: "User created", redirect: true });
    } else {
      res.json({ msg: "Email already exist", redirect: false });
    }
  } else {
    return res.json({ msg: validationErrors });
  }
};

exports.postLogin = async (req, res, next) => {
  let setProfile = false;
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.json({ msg: "Invalid email or password" });
  }

  const userID = user.id.valueOf();
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.json({ msg: "Invalid email or password" });
  }

  req.session.user = user;
  let userSet = await Profile.findOne({ userId: userID });

  if (userSet) {
    setProfile = true;
  }
  const token = generateToken(user.email, user.id);
  const userData = {
    id: userID,
    email: user.email,
    userName: setProfile ? userSet.userName : null,
    name: setProfile ? userSet.name : null,
  };

  return res.json({
    login: true,
    userData,
    setProfile,
    token,
  });
};

generateToken = (email, userId) => {
  const token = jwt.sign(
    {
      email: email,
      userId: userId,
    },
    process.env.Access_Token_Secret,
    { expiresIn: "15m" }
  );
  return token;
};
