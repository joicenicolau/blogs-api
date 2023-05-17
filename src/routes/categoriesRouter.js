const express = require('express');
const validateJwt = require('../middleware/validateJwt');
const validateCategory = require('../middleware/Category/validateCategory');

const category = require('../controllers/category');

const apiRoutes = express.Router();

apiRoutes.post('/', validateJwt, validateCategory, category.createCategory);
apiRoutes.get('/', validateJwt, category.getAllCategory);

module.exports = apiRoutes;