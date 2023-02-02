const User = require("../model/authModel");
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
  const { email, password } = req.body;
  const validationErrors = validationResult(req);

  let setProfile = true;

  const user = await User.findOne({ email: email });
  console.log(user);
  if (user) {
    const userID = user.id.valueOf();
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const accessToken = jwt.sign(
        { email: email },
        process.env.Access_Token_Secret,
        { expiresIn: "1h" }
      );
      const refreshToken = jwt.sign(
        { email: email },
        process.env.Refresh_Token_Secret,
        { expiresIn: "24h" }
      );

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      let userName = await Profile.find({ userId: userID });
      console.log(userName);
      if (userName) {
        setProfile = false;
        userName = userName[0].userName;
      }

      const userData = { _id: userID, email: user.email };

      // save the refresh token to database
      return res.json({
        login: true,
        accessToken: accessToken,
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
