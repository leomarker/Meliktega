const User = require("../model/authModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

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
      res.json({ msg: "User exists" });
    }
  } else {
    return res.json({ msg: validationErrors });
  }
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const validationErrors = validationResult(req);
  console.log(validationErrors.isEmpty());
  if (validationErrors.isEmpty()) {
    const user = await User.findOne({ email: email });
    console.log(user);

    if (user) {
      console.log("nati");
      bcrypt
        .compare(password, user.password)
        .then((match) => {
          if (match === true) {
            const payload = { email };
            const secret = "thisisjustasecreat";
            const token = jwt.sign(payload, secret, { expiresIn: "1h" });
            console.log("jwt");
            return res.send({ login: true, token: token });
          } else {
            console.log("cool");
            return res.send({
              login: false,
              message: "invalid password or email combination",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return res.send({
        login: false,
        message: "no user found with this email",
      });
    }
  } else {
    return res.json({ msg: "Invalid email or password" });
  }
};
