const { loginUser } = require('../services/userService');

// User login
const loginUserController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await loginUser(username, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { loginUserController };
