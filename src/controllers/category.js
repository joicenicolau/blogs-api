const Service = require('../services/categoryService');

const getAllCategory = async (_req, res) => {
  const categories = await Service.getAllCategory();

  return res.status(200).json(categories);
};

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ message: '"name" is required' });
  }
  
  const category = await Service.createCategory({ name });

  return res.status(201).json(category);
};

module.exports = {
  createCategory,
  getAllCategory,
};