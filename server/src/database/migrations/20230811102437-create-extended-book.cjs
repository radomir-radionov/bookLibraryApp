const tableNames = require('../../constants/tableNames.cjs')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.extendedBooks, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      issueYear: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      rating: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      authors: {
        allowNull: false,
        type: Sequelize.ARRAY,
      },
      image: {
        allowNull: false,
        type: Sequelize.JSONB,
      },
      categories: {
        allowNull: false,
        type: Sequelize.ARRAY,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      publish: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pages: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cover: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      weight: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      format: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ISBN: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      producer: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames.extendedBooks)
  },
}
