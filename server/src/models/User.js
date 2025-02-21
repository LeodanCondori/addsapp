const { DataTypes } = require('sequelize');
module.exports = (sequelize) =>
{
  sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      initialValue: 4
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
    {
      timestamps: false
    }
  );
};

// module.exports = async (sequelize) =>
// {
//   await sequelize.queryInterface.createTable('User', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }
//   }, {
//     initialAutoIncrement: 1000
//   });
// }
