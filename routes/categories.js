const categoriesRouter = require('express').Router();

const {findAllCategories, updateCategory, checkEmptyName, deleteCategory, createCategory} = require('../middlewares/categories');
const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', checkEmptyName, createCategory, sendCategoryCreated);
categoriesRouter.put("/categories/:id", checkEmptyName, updateCategory, sendCategoryUpdated);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;