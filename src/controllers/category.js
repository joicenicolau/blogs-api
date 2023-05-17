const Service = require('../services/categoryService');

const getAllCategory = async (_req, res) => {
  const categories = await Service.getAllCategory();

  return res.status(200).json(categories);
};

const createCategory = async (req, res) => {
  const { name } = req.body;

  const category = await Service.createCategory({ name });

  return res.status(201).json(category);
};

module.exports = {
  createCategory,
  getAllCategory,
};