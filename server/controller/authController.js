const User = require("../model/user");
const Profile = require("../model/profile");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

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
  const validationErrors = validationResult(req);

  const user = await User.findOne({ email: email });
  console.log(user);
  if (user) {
    const userID = user.id.valueOf();
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      req.session.user = user;
      let userName = await Profile.findOne({ userId: userID });
      console.log(userName);
      if (userName) {
        setProfile = true;
        userName = userName.userName;
      }

      const userData = { id: userID, email: user.email, userName: userName };
      return res.json({
        login: true,
        userData,
        setProfile,
      });
    } else {
      return res.json({ msg: "Invalid email or password" });
    }
  } else {
    return res.send({
      login: false,
      message: "no user found with this email",
    });
  }
};
