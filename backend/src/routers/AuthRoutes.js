const express = require("express");
const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.post("/sent/login-signup-otp", AuthController.sendLoginOTP);

router.post("/signup", AuthController.createUser);
router.get('/signin', AuthController.signin)

module.exports = router;
