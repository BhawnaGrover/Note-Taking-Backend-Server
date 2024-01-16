const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        // get token from header
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(401).json({
                message: 'No token, authorization denied'
            });
        }
        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({
                message: 'Token verification failed, authorization denied'
            });
        }

        // add user from payload
        req.user = decoded; // Now, 'decoded' contains the user information including 'id'
        req.token = token;
        next();
    } catch (err) {
        res.status(400).json({ message: "Token is not valid" });
    }
}

module.exports = auth;
