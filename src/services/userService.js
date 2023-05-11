const { User } = require('../models');

const createUser = (
  { 
    displayName, 
    email, 
    password, 
    image,
  },
  ) => User.create({ displayName, email, password, image });

const getUser = () => User.findAll({
  attributes: ['id', 'displayName', 'email', 'image'],
});

const getEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  getUser,
  getEmail,
};