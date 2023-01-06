const router = require("express").Router();
const { body: bodyValidator } = require("express-validator");

const setProfile = require("../controller/profileController").setProfile;

const validatSetProfile = [
  bodyValidator("name").notEmpty().withMessage("Enter a name"),
  bodyValidator("userName").notEmpty().withMessage("Enter a userName"),
];

router.post("/api/setProfile", validatSetProfile, setProfile);

module.exports = router;
