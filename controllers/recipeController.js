const Recipe = require("../models/recipe");

exports.getAllRecipes = (req, res) => {
  Recipe.find()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred" });
    });
};

exports.createRecipe = (req, res) => {
  const { title, ingredients, instructions, category } = req.body;
  const newRecipe = new Recipe({ title, ingredients, instructions, category });

  newRecipe
    .save()
    .then(() => {
      res.status(201).json(newRecipe);
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred" });
    });
};

exports.getRecipesByCategory = (req, res) => {
  const { category } = req.params;

  Recipe.find({ category })
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred" });
    });
};

exports.getRecipeById = (req, res) => {
  const { id } = req.params;

  Recipe.findById(id)
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }
      res.json(recipe);
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred" });
    });
};

exports.updateRecipe = (req, res) => {
  const { id } = req.params;
  const { title, ingredients, instructions } = req.body;

  Recipe.findByIdAndUpdate(
    id,
    { title, ingredients, instructions },
    { new: true }
  )
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }
      res.json(recipe);
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred" });
    });
};

exports.deleteRecipe = (req, res) => {
  const { id } = req.params;

  Recipe.findByIdAndDelete(id)
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }
      res.json({ message: "Recipe deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred" });
    });
};
