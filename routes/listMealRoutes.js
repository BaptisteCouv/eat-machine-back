const express = require("express");
const MealsControllers = require('../controllers/listMealControllers')

const router = express.Router();

// Route for display all contracts
router.get("/", MealsControllers.getAllMeals);

// Route for display all contracts
router.post("/", MealsControllers.createMeal);

module.exports = router;