import React, { useState, useEffect } from 'react';
import './App.css';
import GuessContainer from './Containers/GuessContainer';
import IngredientContainer from './Containers/IngredientContainer';
import TopComponents from './Components/TopComponents';

function App() {
  //Our state
  const [dish, setDish] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [category, setCategory] = useState('')
  const [guess, setGuess] = useState('')
  const [gameState, setGame] = useState('')
  const [ingredientState, setIngredientState] = useState([])
  const [ingredients, setIngredients] = useState([])


  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setDish(data.mealName))
      .then((data) => setCuisine(data.mealEthnicity))
      .then((data) => setCategory(data.mealCategory))
      .then((data) => {
        setIngredients(data.mealIngredients);
        const showState = ingredients.slice().fill(false);
        setIngredientState(showState)
      })
      .catch((err) => console.log('Error in get', err));
  })

  const guessFunc = () => {
    if (guess.toLowerCase() === dish.toLowerCase()) {
      // our win condition
      console.log('win')
      setGame("Win")
    } else {
      if (!ingredientState.include(false)) {
        // lose condition
        console.log('lost')
        setGame('Lose')
      }
      const clone = [...ingredientState];
      clone[clone.indexOf(false)] = true;
      setIngredientState(clone);
    }
  }

  return (
    <div className="App">
      <TopComponents dish={dish} cuisine={cuisine} category={category} gameState={gameState} />
      <IngredientContainer ingredients={ingredients} show={ingredientState} />
      <GuessContainer func={guessFunc} setGuess={setGuess} />
    </div>
  );
}

export default App;
