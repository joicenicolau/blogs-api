const express = require('express');
const validateJwt = require('../middleware/validateJwt');
const validateUser = require('../middleware/validateUser');
const validateUserById = require('../middleware/validateUserById');

const user = require('../controllers/user');

const apiRoutes = express.Router();

apiRoutes.post('/', validateUser, user.createUser);
apiRoutes.get('/', validateJwt, user.getAllUsers);
apiRoutes.get('/:id', validateJwt, validateUserById, user.getByUserId);
apiRoutes.delete('/me', validateJwt, user.removeUser);

module.exports = apiRoutes;