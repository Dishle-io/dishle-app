const mongoose = require('mongoose');



const recipeSchema = new mongoose.Schema({
  mealID: {type: String, required: true},
  mealName: {type: String, required: true},
  mealCategory: {type: String, required: true},
  mealEthnicity: {type: String, required: true},
  mealInstructions: {type: String, required: true},
  mealThumbnail: {type: String, required: true},
  mealIngredients: {type: [String], required: true}
});

module.exports = mongoose.model('recipe', recipeSchema);
