const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
{
  sequelize.define('Advert', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    announcement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
