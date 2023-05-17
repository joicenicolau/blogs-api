const Service = require('../../services/postService');

const validatePostById = async (req, res, next) => {
  const { id } = req.params;

  const result = await Service.getPostById(id); 

  if (!result) return res.status(404).json({ message: 'Post does not exist' });

  return next();
};

module.exports = validatePostById;