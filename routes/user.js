const express = require('express');

const router = express.Router();

const signupController = require('../controllers/user');

router.post('/signup',signupController.Signup);

router.post('/Login',signupController.Login);

module.exports = router;