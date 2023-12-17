const express = require("express");
const mainControllers = require("../controllers/main.controller");
const router = express.Router();

/* MAIN ROUTES */

router.get("/home", mainControllers.home);
router.get("/contacto", mainControllers.contacto);
router.get("/about", mainControllers.about);
router.get("/faqs", mainControllers.faqs);

module.exports = router;
