const router = require("express").Router();
const { body: bodyValidator } = require("express-validator");

const postSignup = require("../controller/authController").postSignup;
const postLogin = require("../controller/authController").postLogin;

const validatSignUp = [
  bodyValidator("email").isEmail().withMessage("Please enter a valid email!"),
  bodyValidator("password").isStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
  }).withMessage("password error"),
  bodyValidator("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) throw new Error("Password Mismatch !");
    return true;
  }),
];

const validatLogin = [
  bodyValidator("email").isEmail().withMessage("Please enter a valid email!"),
  bodyValidator("password").notEmpty().withMessage("Invalid password"),
];

router.post("/api/signup", postSignup);
router.post("/api/login", validatLogin, postLogin);

module.exports = router;
