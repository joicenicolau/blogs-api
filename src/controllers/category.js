const Service = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ message: '"name" is required' });
  }
  
  const user = await Service.createCategory({ name });

  return res.status(201).json(user);
};

module.exports = {
  createCategory,
};