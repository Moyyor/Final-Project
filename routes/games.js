const gamesRouter = require('express').Router();

const { findAllGames, createGame, updateGame, deleteGame } = require('../middlewares/games');
const { sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted } = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', createGame, sendGameCreated);
gamesRouter.put("/games/:id", updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

module.exports = gamesRouter;