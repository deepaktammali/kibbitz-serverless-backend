const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Employee = sequelize.define("Employee", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  desc: {
    type: Sequelize.STRING,
  },
  dob: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  gender: {
    type: Sequelize.ENUM('male','female'),
    allowNull: false,
  },
  job_title: {
    type: Sequelize.STRING,
  },
  profile_pic: {
    type: Sequelize.STRING,
  },
  cover_pic: {
    type: Sequelize.STRING,
  },
  
});

module.exports = Employee;