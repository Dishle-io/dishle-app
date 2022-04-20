import React from 'react';
// import { selectDish, selectCuisine, selectType, selectImage } from '../App'
// import {} from 'react-redux'

export default function TopComponents(props) {

    const { dish, cuisine, gameState, cuisineWinState, image } = props
    let correctDish;
    let correctCuisine;

    if (gameState === "Win") {
        correctDish = dish
        correctCuisine = cuisine
    }

    if (cuisineWinState === "Win") {
        correctCuisine = cuisine
    }

    return (
        <div className="TopComponents" >
            <div className="DishImage" >
                <img style={{ width:'25%', height: 'auto'}} src={image}></img>
            </div>
            <div className="DishInfo" >
                Dish: {correctDish}  <br />
                Cuisine: {correctCuisine} <br />
            </div>
        </div>

    )
}