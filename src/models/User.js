module.exports = (sequelize, DataTypes) => {
  const userModel = sequelize.define('User', { 
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  });

  userModel.associate = (models) => {
    userModel.hasMany(models.BlogPost, {
      foreignKey: 'userId', as: 'blogPost'
    });
  }

  return userModel;
};
