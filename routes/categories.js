// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");
// Импортируем вспомогательные функции
const { checkIsCategoryExists, checkEmptyName, findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory} = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);
// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
