const express = require('express');
const validateJwt = require('../middleware/validateJwt');

const category = require('../controllers/category');

const apiRoutes = express.Router();

apiRoutes.post('/categories', validateJwt, category.createCategory);

module.exports = apiRoutes;