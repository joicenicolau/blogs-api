const { User } = require('../models');

const createUser = ({ 
    displayName, 
    email, 
    password, 
    image,
  }) => User.create({ displayName, email, password, image });

const getAllUsers = () => User.findAll({
  attributes: ['id', 'displayName', 'email', 'image'],
});

const getEmail = (email) => User.findOne({ where: { email } });

const getByUserId = (id) => User.findOne({ 
  where: { id }, 
  attributes: { exclude: ['password'] },
});

const removeUser = async (id) => {
  const remove = await User.destroy(
    { where: { id } },
    );
    return remove;
};

module.exports = {
  createUser,
  getAllUsers,
  getEmail,
  getByUserId,
  removeUser,
};