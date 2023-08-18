const tableNames = require('../../constants/tableNames.cjs')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.comments, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      text: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      commentUserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable(tableNames.comments)
  },
}
