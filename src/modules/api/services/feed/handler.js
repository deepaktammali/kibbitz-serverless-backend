'use strict';

const sequelize = require('../../config/database')
const Post = require('../../models/Post')


module.exports.getAllPosts = async (event) => {

    // check if we're able to connect to the database
    try {
      await sequelize.authenticate()
    }
    catch (error) {
      return {
        statusCode: 500,
        error: {
          message: "INTERNAL SERVER ERROR"
        }
      }
    }

    let posts = [];

    try {
      posts = await Post.findAll();
    }
    catch (error) {
      return {
        statusCode: 500,
        error: {
          message: "INTERNAL SERVER ERROR"
        }
      }
    }

    console.log(posts)

    return {
      statusCode: 200,
      body:JSON.stringify(posts)
    };

  }