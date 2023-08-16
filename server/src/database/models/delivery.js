import {Model, DataTypes} from 'sequelize'

export default (sequelize) => {
  class Delivery extends Model {
    //TODO: fix circular dependency
    // static associate({Book}) {
    //   Delivery.belongsTo(Book, {
    //     foreignKey: 'bookId',
    //   })
    // }
  }

  Delivery.init(
    {
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      handed: DataTypes.BOOLEAN,
      dateHandedFrom: DataTypes.DATE,
      dateHandedTo: DataTypes.DATE,
      recipientFirstName: DataTypes.STRING,
      recipientLastName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Delivery',
      timestamps: true,
    }
  )
  return Delivery
}
