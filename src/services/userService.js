const { User } = require('../models');

// pesquisa: https://dev.to/projectescape/the-comprehensive-sequelize-cheatsheet-3m1m#methods
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
  // exclude - dica do Filipe Bueno
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