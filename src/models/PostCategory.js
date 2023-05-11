module.exports = (sequelize, DataTypes) => {
  const postCategoryModel = sequelize.define('PostCategory', { 
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  },
  {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });


  // Course - dia 6.3 - exercício 4
  postCategoryModel.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategoryModel,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: postCategoryModel,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }

  return postCategoryModel;
};