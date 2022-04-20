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
  const [cuisineWinState,setWinCuisine] = useState('')
  const [dishThumbnail,setDishThumbnail] = useState('');

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setDish(data.mealName);
        setCuisine(data.cuisine);
        setIngredients(data.mealIngredients);
        const showState = data.mealIngredients.slice().fill(false, 2);
        setIngredientState([...showState])
        setDishThumbnail(data.mealThumbnail);
        // console.log("Showstate", showState)
        // console.log("IngedState", ingredientState)
      })
      .catch((err) => console.log('Error in get', err));
  }, [])

  const guessFunc = () => {
    if (guess.toLowerCase() === dish.toLowerCase()) {
      // our win condition
      console.log('win')
      setGame("Win")
    } else {
      if (!ingredientState.includes(false)) {
        // lose condition
        console.log('lost', dish)
        setGame('Lose')
      }
      checkCuisine(guess)
      const clone = [...ingredientState];
      clone[clone.indexOf(false)] = true;
      setIngredientState(clone);
    }
  }

  function checkCuisine (guess) {
    const getOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({guess: guess})
    }
    console.log(getOptions)
    fetch("/api/cuisine", getOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data === cuisine) setWinCuisine("Win")
      })
      .catch((err) => console.log('error in check cuisine', err))
  }

  return (
    <div className="App">
      <TopComponents dish={dish} cuisine={cuisine} category={category} gameState={gameState} cuisineWinState={cuisineWinState} image={dishThumbnail}/>
      <IngredientContainer ingredients={ingredients} show={ingredientState} />
      <GuessContainer func={guessFunc} setGuess={setGuess} />
    </div>
  );
}

export default App;
