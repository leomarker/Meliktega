const router = require("express").Router();

const postSignup = require("../controller/authController").postSignup;
const postLogin = require("../controller/authController").postLogin;

router.post("/api/signup", postSignup);
router.post("/api/login", postLogin);

module.exports = router;
