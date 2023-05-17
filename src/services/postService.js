const { Op } = require('sequelize');
const { BlogPost, Category, PostCategory, sequelize, User } = require('../models');

const validateCategoryById = async (categoryIds) => {
  const arrayOfCategoriesIds = categoryIds.map(async (categoryId) => Category.findByPk(categoryId));
  
  const promise = await Promise.all(arrayOfCategoriesIds);

  return promise;
};

const createPost = async ({ title, content, userId, categoryIds, published, updated }) => {
  const result = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create({
      title, content, userId, published, updated, 
    }, { transaction: t });

    await Promise.all(categoryIds.map(async (categoryId) => {
      await PostCategory.create({ categoryId, postId: post.id }, { transaction: t });
    }));

    return post;
  });

  return result;
};

const getAllPost = (condition) => BlogPost.findAll({
  where: condition,
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', througt: { attributes: [] } },
  ],
});

const getPostById = (id) => BlogPost.findOne({
  where: { id },
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', througt: { attributes: [] } },
  ],
});

const updatePostById = async ({ title, content, id }) => {
  await BlogPost.update(
  { title, content, update: new Date() },
  { where: { id } },
);
};

const removePost = async (id) => {
  const remove = await BlogPost.destroy(
    { where: { id } },
    );
    return remove;
};

const serachPost = async (q) => {
  const searchParams = `${q}%`;

  const search = await BlogPost.findAll(
    { where: { [Op.or]: { 
      title: { [Op.like]: searchParams }, 
      content: { [Op.like]: searchParams },
    } },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', througt: { attributes: [] } },
    ] }, 
  );
  
  return search;
};

module.exports = {
  createPost,
  validateCategoryById,
  getAllPost,
  getPostById,
  updatePostById,
  removePost,
  serachPost,
};