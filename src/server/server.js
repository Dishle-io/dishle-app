const express = require('express');
const fetch = require('node-fetch');
const app = express();
const path = require('path');
const PORT = 3001;
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const Recipe = require('./DBModel.js')
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

app.use(bodyParser.urlencoded({ extended: false }));
/**
 * handle parsing request body
 */
app.use(express.json());


app.use("/api/cuisine", async (req, res) => {
  const {guess} = req.body
  console.log(guess);
  // console.log('guess', guess)
  const recipe = await Recipe.findOne({mealName: guess})
  // console.log("recipetest", recipe)
  res.status(200).json(recipe) 
});

app.use("/api", async (req, res) => {
  const dbSize = await Recipe.collection.countDocuments()
  // console.log('dbSize', dbSize);
  let random = randomizer(dbSize);
  let meal = await Recipe.findOne({mealID: random});
  // console.log('meal:', meal);
  res.status(200).json(meal)
});



const url = new URL('/api/json/v1/1/search.php?f=b', 'https://themealdb.com')



function randomizer(limit) {
  return Math.ceil(Math.random() * limit)
}

// fetch(url)
//   .then(response => response.json())
//   .then(responseToString => JSON.stringify(responseToString))
//   .then(responseJSON => fs.appendFile(path.join(__dirname, './database.json'), responseJSON, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('File written successfully');
//     }
//   }))
//   .catch(err => console.log(err))

// const obj1 = {
//   mealID: '5',
//   mealName: 'Pumpkin Pie',
//   cuisine: 'American',
//   mealInstructions: 'https://www.themealdb.com/meal.php?c=52857',
//   mealThumbnail: 'https://www.themealdb.com/images/media/meals/usuqtp1511385394.jpg',
//   mealIngredients: [ 'Pumpkin', 'Shortcrust Pastry', 'Flour', 'Sugar', 'Salt', 'Nutmeg', 'Cinnamon', 'Eggs', 'Butter', 'Milk' ],
// }


// Recipe.create([obj1], (err, recipes) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('recipe added')
//   }
// });


mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to DB.'))
  .then(() => app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
