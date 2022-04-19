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

app.use("/api", (req, res) => res.status(200).json("test"))

const url = new URL('/api/json/v1/1/search.php?f=a', 'https://themealdb.com')

// fetch(url)
//   .then(response => response.json())
//   .then(responseToString => JSON.stringify(responseToString))
//   .then(responseJSON => fs.writeFile(path.join(__dirname, './database.json'), responseJSON, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('File written successfully');
//     }
//   }))
//   .catch(err => console.log(err))


mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to DB.'))
  .then(() => app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
