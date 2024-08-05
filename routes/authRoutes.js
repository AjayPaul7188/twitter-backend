const express = require('express');
const { loginUserController } = require('../controllers/authController');

const router = express.Router();

// User login
router.post('/login', loginUserController);

module.exports = router;
