const Service = require('../../services/postService');

const validateRemove = async (req, res, next) => {
  const { id } = req.params;
  const { data } = req.payload;

  const result = await Service.getPostById(id); 

  if (!result) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  if (data.id !== result.userId) {
  return res
    .status(401).json({ message: 'Unauthorized user' }); 
  }
  
  return next();
};

module.exports = validateRemove;