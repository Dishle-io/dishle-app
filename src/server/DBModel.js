const mongoose = require('mongoose');



const recipeSchema = new mongoose.Schema({
  mealID: {type: String, required: true},
  mealName: {type: String, required: true},
  cuisine: {type: String},
  mealInstructions: {type: String},
  mealThumbnail: {type: String},
  mealIngredients: {type: [String]}
});

module.exports = mongoose.model('recipe', recipeSchema);
