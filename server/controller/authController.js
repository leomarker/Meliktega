const User = require("../model/authModel");

const bcrypt = require("bcrypt");
const { reset } = require("nodemon");

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
  } else {
    res.send("user exists");
  }
};

exports.postLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      res.status("200").send("login was authenticated");
    } else {
      res.send("invalid password or email combination");
    }
  } else {
    res.send("no user found with this email");
  }
};
