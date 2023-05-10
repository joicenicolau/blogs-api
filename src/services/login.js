const { User } = require('../models');

const createUser = ({ email, password }) => User.create({ email, password });

const getUser = () => User.findAll();

const getEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  getUser,
  getEmail,
};