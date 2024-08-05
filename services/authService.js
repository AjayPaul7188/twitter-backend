const jwt = require('jsonwebtoken');

// Verify JWT token
const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        throw new Error('Token is not valid');
    }
};

module.exports = { verifyToken };
