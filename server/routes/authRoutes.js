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
    minSymbols: 1,
  }),
  bodyValidator("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) throw new Error("Password Mismatch !");
    return true;
  }),
];

router.post("/api/signup", validatSignUp, postSignup);
router.post("/api/login", postLogin);

module.exports = router;
