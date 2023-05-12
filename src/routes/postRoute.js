const express = require('express');
const validateJwt = require('../middleware/validateJwt');
const validatePost = require('../middleware/validatePost');

const post = require('../controllers/post');

const apiRoutes = express.Router();

apiRoutes.post(
'/post', 
validateJwt, 
validatePost, 
post.createPost,
);

module.exports = apiRoutes;