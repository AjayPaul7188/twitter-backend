const Tweet = require('../models/Tweet');

// Post a new tweet
const postTweet = async (userId, text) => {
    const tweet = new Tweet({ userId, text });
    await tweet.save();
    return tweet;
};

module.exports = { postTweet };
