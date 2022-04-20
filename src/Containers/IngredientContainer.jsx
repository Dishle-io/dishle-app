import React from 'react'
import Ingredient from '../Components/Ingredient';
import {Card, CardContent, Box, CardActions, List, ListItem, ListItemText, Divider} from '@mui/material' 

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};
export default function IngredientContainer(props) {
	const { ingredients } = props;
	const { show } = props;
	const ingredientMap = ingredients.map((ingredient, index) => <Ingredient name={ingredient} isReveal={show[index]}/>)
	const ingredientMap2 = ingredients.map((ingredient, index) => <ListItem button divider > <Ingredient isReveal={show[index]} name={ingredient}> </Ingredient> </ListItem>)

  return (
    <>
		{/* <div className="mdc-card">IngredientContainer
		{ingredientMap}
	</div> */}

	<List sx={style} component="nav" aria-label="mailbox folders"> {ingredientMap2} </List>
	</>
  )
}
