const tableNames = require('../../../constants/tableNames.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.extendedBooks, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bookId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      publish: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pages: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cover: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      weight: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      format: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ISBN: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      producer: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable(tableNames.extendedBooks)
  },
}
