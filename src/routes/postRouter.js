const express = require('express');
const validateJwt = require('../middleware/validateJwt');
const validatePost = require('../middleware/Post/validatePost');
const validatePostById = require('../middleware/Post/validatePostById');
const validateUpdate = require('../middleware/Post/validateUpdate');
const validateRemove = require('../middleware/Post/validateRemove');

const post = require('../controllers/post');

const apiRoutes = express.Router();

apiRoutes.get('/search', validateJwt, post.serachPost);
apiRoutes.post('/', validateJwt, validatePost, post.createPost);
apiRoutes.get('/', validateJwt, post.getAllPost);
apiRoutes.get('/:id', validateJwt, validatePostById, post.getPostById);
apiRoutes.put('/:id', validateJwt, validateUpdate, post.updatePostById);
apiRoutes.delete('/:id', validateJwt, validateRemove, post.removePost);

module.exports = apiRoutes;