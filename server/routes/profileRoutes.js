const router = require("express").Router();
const { body: bodyValidator } = require("express-validator");

const setProfile = require("../controller/profileController").setProfile;

const validatSignUp = [
  bodyValidator("name").notEmpty().withMessage("Enter a name"),
  bodyValidator("userName").notEmpty().withMessage("Enter a userName"),
];

router.post(
  "/api/setProfile",
  (req, res, next) => {
    console.log("nati");
    next();
  },
  setProfile
);

module.exports = router;
