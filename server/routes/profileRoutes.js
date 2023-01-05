const router = require("express").Router();

const setProfile = require("../controller/profileController").setProfile;

router.post(
  "/api/setProfile",
  (req, res, next) => {
    console.log("nati");
    next();
  },
  setProfile
);

module.exports = router;
