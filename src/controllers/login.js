const { createToken } = require('../auth/authFunction');
const Service = require('../services/userService');

module.exports = async (req, res) => {
  const { email } = req.body;

  const result = await Service.getEmail(email);
  
  const { dataValues: { password: _password, ...loginWithoutPassword } } = result;

  const token = createToken(loginWithoutPassword);

  return res.status(200).json({ token });
};