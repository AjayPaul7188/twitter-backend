const express = require('express');
const { registerUserController, getUserTimelineController } = require('../controllers/userController');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();

// User registration
router.post('/register', registerUserController);

// Fetch user timeline (protected route)
router.get('/:userId/timeline', authMiddleware, getUserTimelineController);

module.exports = router;
