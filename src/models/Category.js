module.exports = (sequelize, DataTypes) => {
  const categoryModel = sequelize.define('Category', { 
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  },
  {
    tableName: 'categories',
    timestamps: false,
  });
  return categoryModel;
};