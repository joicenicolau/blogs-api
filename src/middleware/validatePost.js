const Service = require('../services/postService');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  const validateId = await Service.validateCategoryById(categoryIds);

  const notFound = validateId.some((v) => !v); 
  if (notFound) {
    return res 
      .status(400)
      .json({ message: 'one or more "categoryIds" not found' }); 
  }

  return next();
};

module.exports = validatePost;