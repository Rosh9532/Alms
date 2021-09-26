const express = require("express");
const { userSignup, userSignin, getUser } = require("../controller/user");
const { requireSignin } = require('../middlewares/index');
const router = express.Router();

router.post("/userSignup", userSignup);
router.post("/userSignin", userSignin);
router.get("/getUser", requireSignin, getUser)

module.exports = router;
