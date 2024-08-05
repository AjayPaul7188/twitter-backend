const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
const registerUser = async (username, password) => {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Create new user
    const user = new User({ username, password });
    await user.save();
};

// Login user and generate JWT token
const loginUser = async (username, password) => {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
};

// Fetch user timeline
const getUserTimeline = async (userId) => {
    const tweets = await Tweet.find({ userId }).sort({ createdAt: -1 });
    return tweets;
};

module.exports = { registerUser, loginUser, getUserTimeline };
