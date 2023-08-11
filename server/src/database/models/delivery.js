import {Model} from 'sequelize'

export default (sequelize, DataTypes) => {
  class Delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Delivery.belongsTo(models.User, {
        foreignKey: 'recipientId',
        as: 'recipient',
      })
      Delivery.belongsTo(models.Book, {
        foreignKey: 'bookId',
        as: 'book',
      })
    }
  }
  Delivery.init(
    {
      handed: DataTypes.BOOLEAN,
      dateHandedFrom: DataTypes.DATE,
      dateHandedTo: DataTypes.DATE,
      recipientFirstName: DataTypes.STRING,
      recipientLastName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Delivery',
    }
  )
  return Delivery
}
