const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * APP Routes
 */
router.get('/',recipeController.homepage);
router.get('/categories',recipeController.exploreCategories);
router.get('/recipe/:id',recipeController.exploreRecipe);
router.get('/categories/:id',recipeController.exploreCategoriesById);
router.get('/explore-latest',recipeController.exploreLatest);
router.get('/explore-random',recipeController.exploreRandom);
router.get('/submit-recipe',recipeController.submit);

router.post('/search',recipeController.searchRecipe);
router.post('/submit-recipe',recipeController.submitRecipeOnPost);

module.exports= router;