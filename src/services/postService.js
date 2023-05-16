const { BlogPost, Category, PostCategory, sequelize, User } = require('../models');

const validateCategoryById = async (categoryIds) => {
  // console.log('linha4', categoryIds);
  const arrayOfCategoriesIds = categoryIds.map(async (categoryId) => Category.findByPk(categoryId));
  
  const promise = await Promise.all(arrayOfCategoriesIds);
  // console.log('array do promise', promise);

  return promise;
};

// pesquisa: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/22fa9643-5f27-41f5-943b-2c7cc1c67c01/lesson/a46df24c-0175-49d4-8557-bdcd947eb168
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

// pesquisa: exc.12 do dia 6.1
const updatePostById = async ({ title, content, id }) => {
  await BlogPost.update(
  // atualiza o que ele pede(title e content) e cria a update.
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

module.exports = {
  createPost,
  validateCategoryById,
  getAllPost,
  getPostById,
  updatePostById,
  removePost,
};