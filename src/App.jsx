import React, { useState, useEffect } from 'react';
import './App.css';
import GuessContainer from './Containers/GuessContainer';
import IngredientContainer from './Containers/IngredientContainer';
import TopComponents from './Components/TopComponents';

function App() {


  const ingredients = [];

  //Our state
  const [dish, setDish] = useState([])
  const [cuisine, setCuisine] = useState([])
  const [category, setCategory] = useState()
  const [ingredientState, setIngredientState] = useState([]) /
 
  const guessFunc = (target) => {
    console.log(target);
    const clone = [...ingredientState];
    clone[clone.indexOf(false)] = true;
    setIngredientState(clone);
  }

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setDish(data.mealName))
      .then((data) => setCuisine(data.mealEthnicity))
      .then((data) => setCategory(data.mealCategory))
      .then((data) => {
        ingredients = data.mealIngredients
        const fakeState = ingredients.slice().fill(false);
        setIngredientState(fakeState)
      })
      .catch((err) => console.log('Error in get', err));
  }, [])

  return (
    <div className="App">
      <TopComponents dish={dish} cuisine={cuisine} category={category} />
      <IngredientContainer ingredients={ingredients} show={ingredientState} />
      <GuessContainer func={guessFunc} />
    </div>
  );
}

export default App;
