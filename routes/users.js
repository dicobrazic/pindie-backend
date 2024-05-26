  // Создаём роут для запросов категорий 
  const usersRouter = require('express').Router();
  const { checkAuth } = require("../middlewares/auth.js");

  // Импортируем вспомогательные функции
  const {findAllUsers, hashPassword, checkIsUserExists, checkEmptyNameAndEmail, checkEmptyNameAndEmailAndPassword, createUser, findUserById, updateUser, deleteUser} = require('../middlewares/users');
  const {sendAllUsers, sendMe, sendUserCreated, sendUserById, sendUserUpdated,sendUserDeleted} = require('../controllers/users');
  
  // Обрабатываем GET-запрос с роутом '/categories'
  usersRouter.get('/users', findAllUsers, sendAllUsers);
  usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
  ); 
  
  usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
  );
  usersRouter.get("/me", checkAuth, sendMe);
  usersRouter.get('/users/:id', findUserById, sendUserById);
  usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
  // Экспортируем роут для использования в приложении — app.js
  module.exports = usersRouter;