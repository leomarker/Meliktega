const User = require("../model/authModel");

exports.postSignup = (req, res, next) => {
  const user = new User(
    req.body.email,
    req.body.password,
    req.body.confirmPassword
  );
  // const userExist = async () => {
  //   return await user
  //     .findOne(req.body.email)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch();
  // };
  const userExist = user
    .findOne(req.body.email)
    .then((res) => {
      console.log(res);
    })
    .catch();
  console.log(userExist);
  if (userExist === null) {
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

  // res.send("done");
};
