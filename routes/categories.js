const categoriesRouter = require('express').Router();

const findAllGames = require('../middlewares/games');
const sendAllGames = require('../controllers/games');

categoriesRouter.get('/categories', findAllGames, sendAllGames);

module.exports = categoriesRouter;