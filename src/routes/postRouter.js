const express = require('express');
const validateJwt = require('../middleware/validateJwt');
const validatePost = require('../middleware/validatePost');
const validatePostById = require('../middleware/validatePostById');
const validateUpdate = require('../middleware/validateUpdate');
const validateRemove = require('../middleware/validateRemove');

const post = require('../controllers/post');

const apiRoutes = express.Router();

apiRoutes.get('/search', validateJwt, post.serachPost);
apiRoutes.post('/', validateJwt, validatePost, post.createPost);
apiRoutes.get('/', validateJwt, post.getAllPost);
apiRoutes.get('/:id', validateJwt, validatePostById, post.getPostById);
apiRoutes.put('/:id', validateJwt, validateUpdate, post.updatePostById);
apiRoutes.delete('/:id', validateJwt, validateRemove, post.removePost);

module.exports = apiRoutes;