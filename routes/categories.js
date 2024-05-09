const categoriesRouter = require('express').Router();

const {findAllCategories} = require('../middlewares/categories');
const {sendAllCategories, sendCategoryCreated} = require('../controllers/categories');
const { createCategory } = require('../middlewares/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', createCategory, sendCategoryCreated);

module.exports = categoriesRouter;