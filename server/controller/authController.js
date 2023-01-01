const User = require("../model/authModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.postSignup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

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
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  console.log(user);

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      const payload = { email };
      const secret = "thisisjustasecreat";
      const token = jwt.sign(payload, secret, { expiresIn: "1h" });
      res.send({ auth: true, token: token });
    } else {
      res.send({
        auth: false,
        message: "invalid password or email combination",
      });
    }
  } else {
    res.send({ auth: false, message: "no user found with this email" });
  }
};
