const { verifyToken } = require('../auth/authFunction');

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    // console.log('jwt', authorization);
  
    if (!authorization) { return res.status(401).json({ message: 'Token not found' }); }
  
    const data = verifyToken(authorization);
    req.payload = data;
    // console.log('data aqui', data);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
