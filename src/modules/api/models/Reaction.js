const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Reaction = sequelize.define("Reaction", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: Sequelize.ENUM(' LIKE', 'CELEBRATE', 'CURIOUS', 'JOY', 'SAD'),
    allowNull: false,
  },
  
});

module.exports = Reaction;