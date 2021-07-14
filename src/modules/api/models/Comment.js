const {DataTypes} = require('sequelize')
const db = require('../config/database')

const Comment = db.define("Comment",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    message:{
        type:DataTypes.STRING
    }
})
module.exports = Comment;