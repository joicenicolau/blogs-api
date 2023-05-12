const { Category } = require('../models');

const createCategory = ({ name }) => Category.create({ name });

const getAllCategory = () => Category.findAll({
  attributes: ['id', 'name'],
});

// const getCategoryById = (id) => Category.findOne({ 
//   where: { id },
// });

module.exports = {
  createCategory,
  getAllCategory,
  // getCategoryById, 
};