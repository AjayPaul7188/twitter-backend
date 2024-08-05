const express = require('express');
const { postTweetController } = require('../controllers/tweetController');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();

// Post a tweet (protected route)
router.post('/', authMiddleware, postTweetController);

module.exports = router;
