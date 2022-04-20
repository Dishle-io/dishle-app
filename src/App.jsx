import React, { useState, useEffect } from 'react';
import './App.css';
import GuessContainer from './Containers/GuessContainer';
import IngredientContainer from './Containers/IngredientContainer';
import TopComponents from './Components/TopComponents';
import backgroundImage from './images/cooking.jpg'

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
  const [counter, setCounter] = useState(0);
  const [blurRadius,setBlurRadius] = useState(64);


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
      blur()
      const clone = [...ingredientState];
      clone[clone.indexOf(false)] = true;
      setIngredientState(clone);
    }
  }
  const blur =  () => {
    if (blurRadius === 64) {
      setBlurRadius(64 - (3*(64/ingredients.length)))
    } else {
      const newRadius = blurRadius - (64/ingredients.length)
      setBlurRadius(newRadius)
    }
  }

  function checkCuisine (guess) {
    guess = guess.toUpperCase();
    const getOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({guess: guess})
    }
    console.log(getOptions)
    fetch("/api/cuisine", getOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.cuisine === cuisine) setWinCuisine("Win")
      })
      .catch((err) => console.log('error in check cuisine', err))
  }

  return (
    <div className ='background' style={{backgroundImage: `url(${backgroundImage}`}}>
    <div className="App">
      <div className='title'> Dishle </div>
      <TopComponents dish={dish} cuisine={cuisine} category={category} gameState={gameState} cuisineWinState={cuisineWinState} image={dishThumbnail} blurRadius = {blurRadius}/>
      <IngredientContainer ingredients={ingredients} show={ingredientState} />
      <GuessContainer gameState={gameState} func={guessFunc} setGuess={setGuess} />
    </div>
    </div>
  );
}

export default App;
