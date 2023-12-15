const express = require("express");
const CategoryControllers = require('../controllers/categoryControllers')

const router = express.Router();

// Route for display all contracts
router.get("/", CategoryControllers.getAllCategory);

// Route for display all contracts
router.post("/", CategoryControllers.createOneCategory);


module.exports = router;