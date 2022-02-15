var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

const { registerUser, signInUser } = require("../controllers/auth.controller");

router.route("/signup").post(registerUser);
router.route("/login").post(signInUser);

module.exports = router;
