
const { checkAuth } = require("../middlewares/auth.js");
const gamesRouter = require('express').Router();

const { findAllGames, checkIsVoteRequest, checkIsGameExists, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, createGame, findGameById, updateGame, deleteGame } = require('../middlewares/games');
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.delete(
  "/games/:id", // Слушаем запросы по эндпоинту
  checkAuth,
  deleteGame,
  sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
);
module.exports = gamesRouter;