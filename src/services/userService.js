const { User } = require('../models');

const createUser = (
  { 
    displayName, 
    email, 
    password, 
    image,
  },
  ) => User.create({ displayName, email, password, image });

const getAllUsers = () => User.findAll({
  attributes: ['id', 'displayName', 'email', 'image'],
});

const getEmail = (email) => User.findOne({ where: { email } });

const getByUserId = (id) => User.findOne({ 
  where: { id }, 
  // exclude - dica do Filipe Bueno
  attributes: { exclude: ['password'] },
});

module.exports = {
  createUser,
  getAllUsers,
  getEmail,
  getByUserId,
};