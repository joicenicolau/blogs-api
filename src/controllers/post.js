const Service = require('../services/postService');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { data: { id } } = req.payload;
  
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

  return res.status(200).json(result);
};

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  await Service.updatePostById({ title, content, id });

  const update = await Service.getPostById(id);

  return res.status(200).json(update);
};

const removePost = async (req, res) => {
  const { id } = req.params;

  const isRemoved = await Service.removePost(id);
  
  return res.status(204).json(isRemoved);
};

const serachPost = async (req, res) => {
  const { q } = req.query;

  const result = await Service.serachPost(q);

  return res.status(200).json(result);
};

module.exports = {
  createPost,
  getAllPost,
  getPostById,
  updatePostById,
  removePost,
  serachPost,
};