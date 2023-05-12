const Service = require('../services/postService');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  // console.log('payload', req.payload);
  const { data: { id } } = req.payload;

  const validateId = await Service.validateCategoryById(categoryIds);
  // console.log('sou o validate', validateId);

  const notFound = validateId.some((v) => !v); 
  if (notFound) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' }); 
  }
  
  const post = await Service.createPost({ 
    title, 
    content, 
    userId: id,
    categoryIds,
    updated: new Date(),
    published: new Date(),
  });

  return res.status(201).json(post);
};

const getAllPost = async (_req, res) => {
  const post = await Service.getAllPost();

  return res.status(200).json(post);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const result = await Service.getPostById(id); 

  if (!result) return res.status(404).json({ message: 'Post does not exist' });
  
  return res.status(200).json(result);
};

module.exports = {
  createPost,
  getAllPost,
  getPostById,
};