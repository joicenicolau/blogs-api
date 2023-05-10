'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('blog_posts', { 
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true, 
      },
      title: {
        allowNull: false, 
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false, 
        type: Sequelize.STRING,
      },
      user_id: {
        allowNull: false, 
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      published: {
        allowNull: false, 
        type: Sequelize.DATE,
      },
      updated: {
        allowNull: false, 
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('blog_posts');
  }
};
