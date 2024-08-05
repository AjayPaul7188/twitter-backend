const { postTweet } = require('../services/tweetService');

// Post a tweet
const postTweetController = async (req, res) => {
    try {
        const { text } = req.body;
        const userId = req.user.userId;
        const tweet = await postTweet(userId, text);
        res.status(201).json({ message: 'Tweet posted successfully', tweet });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { postTweetController };
