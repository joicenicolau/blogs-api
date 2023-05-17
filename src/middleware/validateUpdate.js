const Service = require('../services/postService');

const validateUpdate = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { data } = req.payload;

  const result = await Service.getPostById(id); 

  if (!title || !content) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  if (data.id !== result.id) return res.status(401).json({ message: 'Unauthorized user' });
  
  return next();
};

module.exports = validateUpdate;