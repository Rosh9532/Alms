const jwt = require('jsonwebtoken');

exports.requireSignin = function (req, res, next) {
    // get token from header
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ error: { message: 'no token found' } });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded)
            return res.status(401).json({ error: { message: 'invalid token' } });
        req._id = decoded._id;
        next();
    } catch (error) {
        console.error(error.message);
        res.status(400).json('Server Error');
    }
};
