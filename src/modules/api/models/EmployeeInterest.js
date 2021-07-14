const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const EmployeeInterest = sequelize.define("EmployeeInterest", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  hobbies: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = EmployeeInterest;