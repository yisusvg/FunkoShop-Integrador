const express = require('express');
const router = express.Router();

const { login, doLogin, register, doregister, logout } = require('../controllers/auth.controller');

router.get('/login', login);
router.post('/login', doLogin);
router.get('/register', register);
router.post('/register', doregister);
router.get('/logut', logout);


module.exports = router;