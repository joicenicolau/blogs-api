const { User } = require('../models');

const createUser = (
  { 
    displayName, 
    email, 
    password, 
    image,
  },
  ) => User.create({ displayName, email, password, image });

const getUser = () => User.findAll();

const getEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  getUser,
  getEmail,
};