const express = require('express');
const validateJwt = require('../middleware/validateJwt');

const category = require('../controllers/category');

const apiRoutes = express.Router();

apiRoutes.post('/categories', validateJwt, category.createCategory);
apiRoutes.get('/categories', validateJwt, category.getAllCategory);

module.exports = apiRoutes;