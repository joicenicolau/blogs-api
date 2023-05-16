const express = require('express');
const validateJwt = require('../middleware/validateJwt');
const validatePost = require('../middleware/validatePost');
const validateUpdate = require('../middleware/validateUpdate');

const post = require('../controllers/post');

const apiRoutes = express.Router();

apiRoutes.get('/post/search', validateJwt, post.serachPost);
apiRoutes.post('/post', validateJwt, validatePost, post.createPost);
apiRoutes.get('/post', validateJwt, post.getAllPost);
apiRoutes.get('/post/:id', validateJwt, post.getPostById);
apiRoutes.put('/post/:id', validateJwt, validateUpdate, post.updatePostById);
apiRoutes.delete('/post/:id', validateJwt, post.removePost);

module.exports = apiRoutes;