const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.get("/profile", authMiddleware, userController.getUserProfileByJwt);

module.exports = router;
