const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Media = sequelize.define("Media", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  media_type: {
    type: Sequelize.ENUM('image','vedio'),
    allowNull: false,
  },
  
});

module.exports = Media;