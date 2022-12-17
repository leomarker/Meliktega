const router = require("express").Router();

const postSignup = require("../controller/authController").postSignup;

router.post("/signup", postSignup);

module.exports = router;
