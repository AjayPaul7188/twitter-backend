const { registerUser, getUserTimeline } = require('../services/userService');

// Register a new user
const registerUserController = async (req, res) => {
    try {
        const { username, password } = req.body;
        await registerUser(username, password);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Fetch user timeline
const getUserTimelineController = async (req, res) => {
    try {
        const { userId } = req.params;
        const tweets = await getUserTimeline(userId);
        res.status(200).json(tweets);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { registerUserController, getUserTimelineController };
