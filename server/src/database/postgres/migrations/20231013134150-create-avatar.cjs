const tableNames = require('../../../constants/tableNames.cjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.avatars, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      contentType: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      fileName: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      data: {
        allowNull: true,
        type: Sequelize.TEXT,
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
  async down(queryInterface) {
    await queryInterface.dropTable(tableNames.avatars)
  },
}
