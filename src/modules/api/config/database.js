const Sequelize = require("sequelize");

var sequelize = new Sequelize("kibbitz","root","root",{
  dialect:'mysql',
  port:3306,
  host:'localhost'
})

module.exports = sequelize;