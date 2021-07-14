const {DataTypes} = require('sequelize')
const db = require('../config/database')

const Post = db.define("Post",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    textContent:{
        type:DataTypes.STRING
    },
    location:{
        type:DataTypes.STRING
    },
    type:{
        type:DataTypes.ENUM('ACTIVITY','POST')
    }
})
module.exports = Post;