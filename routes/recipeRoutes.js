const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipeController");

// Recipe routes
router.get("/", recipeController.getAllRecipes);
router.post("/", recipeController.createRecipe);
router.get("/category/:category", recipeController.getRecipesByCategory);

router.delete("/:id", recipeController.deleteRecipe);
router.put("/:id", recipeController.updateRecipe);
router.get("/:id", recipeController.getRecipeById);

module.exports = router;
