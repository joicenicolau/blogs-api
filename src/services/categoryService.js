const { Category } = require('../models');

const createCategory = ({ name }) => Category.create({ name });

const getAllCategory = () => Category.findAll({
  attributes: ['id', 'name'],
});

module.exports = {
  createCategory,
  getAllCategory, 
};