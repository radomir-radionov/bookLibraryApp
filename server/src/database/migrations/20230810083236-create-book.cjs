const tableNames = require('../../constants/tableNames.cjs')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames.books, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      issueYear: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rating: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      authors: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      image: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      categories: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
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
    await queryInterface.dropTable(tableNames.books)
  },
}
