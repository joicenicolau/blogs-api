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

// exc.13 do dia 6.1
const updatePostById = async (req, res) => {
  // console.log('sou o req', req);
  const { id } = req.params;
  const { title, content } = req.body;
  // Somente o user que criou o blog post poderá editá-lo.
  const { data } = req.payload;

  // console.log('sou o id', id);
  // console.log('sou a data', data);

  const result = await Service.getPostById(id);
  // console.log('sou o result', result.id);
  // se o id for diferente do userId retorna o erro. 
  if (data.id !== result.id) return res.status(401).json({ message: 'Unauthorized user' });

  await Service.updatePostById({ title, content, id });
  // console.log('sou o update', update);
  // a função getPostById retorna o que preciso da table user e da table category. 
  const update = await Service.getPostById(id);

  return res.status(200).json(update);
};

const removePost = async (req, res) => {
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