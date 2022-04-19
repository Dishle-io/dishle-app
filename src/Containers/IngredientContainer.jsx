import React from 'react'
import Ingredient from '../Components/Ingredient';

export default function IngredientContainer(props) {
	const { ingredients } = props;
	const { show } = props;
	const ingredientMap = ingredients.map((ingredient, index) => <Ingredient name={ingredient} isReveal={show[index]}/>)

  return (
    <div>IngredientContainer
			{ingredientMap}
		</div>
  )
}
