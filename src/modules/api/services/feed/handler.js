'use strict';

const sequelize = require('../../config/database')
const Post = require('../../models/Post')
const HttpResponse = require('../../helpers/HttpResponse')


module.exports.getAllPosts = async (event) => {

  // check if we're able to connect to the database
  try {
    await sequelize.authenticate()
  }
  catch (error) {
    console.log(error)
    return HttpResponse.INTERNAL_SERVER_ERROR()
  }

  let posts = [];

  try {
    posts = await Post.findAll();
  }
  catch (error) {
    return HttpResponse.INTERNAL_SERVER_ERROR()
  }

  return HttpResponse.OK(posts)

}