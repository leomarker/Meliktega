const router = require("express").Router();

const postSignup = require("../controller/authController").postSignup;
const postLogin = require("../controller/authController").postLogin;

router.post("/api/signup", postSignup);
router.post(
  "/api/login",
  (req, res, next) => {
    console.log("we got a hit");
    next();
  },
  postLogin
);

module.exports = router;
