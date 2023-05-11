const express = require('express');
const validateUser = require('../middleware/validateUser');
const validateJwt = require('../middleware/validateJwt');

const login = require('../controllers/login');
const user = require('../controllers/user');

const apiRoutes = express.Router();

apiRoutes.post('/login', login);
apiRoutes.post('/user', validateUser, user.createUser);
apiRoutes.get('/user', validateJwt, user.getAllUsers);

module.exports = apiRoutes;