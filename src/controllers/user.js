const { createToken } = require('../auth/authFunction');
const Service = require('../services/userService');

module.exports = async (req, res) => {
  const { displayName, email, password } = req.body;

  const result = await Service.getEmail(email);

  if (result) {
    return res
      .status(409)
      .json({ message: 'User already registered' });
  }
  
  const user = await Service.createUser({ displayName, email, password });

  const { password: _password, ...userWithoutPassword } = user.dataValues;

  const token = createToken(userWithoutPassword);

  return res.status(201).json({ token });
};