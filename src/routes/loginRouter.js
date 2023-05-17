const express = require('express');
const login = require('../controllers/login');
const validateLogin = require('../middleware/validateLogin');

const apiRoutes = express.Router();

apiRoutes.post('/', validateLogin, login);

module.exports = apiRoutes;
