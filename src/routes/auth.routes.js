const express = require ('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();



/* MAIN ROUTES */

router.get('/login',authController.login); 
router.get('/logout',authController.logout);
router.get('/register',authController.register);


module.exports = router;

