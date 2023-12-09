const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('./../../database/db.js');

//sequelize
//conexion

const Repair = sequelize.define('Repairs', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    allowNull: false,
    defaultValue: 'active',
  },
  userid: {
    allowNull: true,
    type: DataTypes.STRING,
  },
});
console.log(Repair === sequelize.models.Repair);
module.exports = Repair;
