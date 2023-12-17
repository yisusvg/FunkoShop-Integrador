const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

/* MAIN ROUTES */

router.get("/login", authController.login);
router.post("/login", authController.login);
router.get("/register", authController.register);
router.post("/register", authController.register);
router.get("/logout", authController.logout);

module.exports = router;
