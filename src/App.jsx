import React, { useState } from 'react';
import './App.css';
import GuessContainer from './Containers/GuessContainer';
import IngredientContainer from './Containers/IngredientContainer';

function App() {
  //fake data returned from backend
  const mockData = {
    recipeName: 'Ratatouille',
    category: 'French',
    ingredients: ['zuccini', 'potato', 'onion'],
    recipe: 'You need a rat for this recipe'
  };
  // for our default state, start off at ingredient array length filled with falsey
  const fakeState = mockData.ingredients.slice().fill(false);

  //Our state for when ingredients show
  const [ingredientState, setIngredientState] = useState(fakeState)

  const guessFunc = (target) => {
    console.log(target);
    const clone = [...ingredientState];
    clone[clone.indexOf(false)] = true;
    setIngredientState(clone);
  }
  return (
    <div className="App">
      <IngredientContainer ingredients={mockData.ingredients} show={ingredientState}/>
      <GuessContainer func={guessFunc}/>
    </div>
  );
}

export default App;
