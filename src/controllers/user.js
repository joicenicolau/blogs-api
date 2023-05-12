const { createToken } = require('../auth/authFunction');
const Service = require('../services/userService');

const getAllUsers = async (_req, res) => {
    const users = await Service.getAllUsers();

    return res.status(200).json(users);
};

const getByUserId = async (req, res) => {
  const { id } = req.params;

  const userId = await Service.getByUserId(id);
  // console.log('userId aqui', userId);

  if (!userId) {
    return res
      .status(404)
      .json({ message: 'User does not exist' });
  }

  return res.status(200).json(userId);
};

const createUser = async (req, res) => {
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

module.exports = {
  createUser,
  getAllUsers,
  getByUserId,
};