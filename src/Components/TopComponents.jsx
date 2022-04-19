import React from 'react';
// import { selectDish, selectCuisine, selectType, selectImage } from '../App'
// import {} from 'react-redux'

export default function TopComponents(props) {

    const { dish, cuisine, category, gameState, cuisineState } = props
    let correctDish;
    let correctCuisine
    let image

    if (gameState === "Win") {
        correctDish = dish
        correctCuisine = cuisine
    }

    // if (cuisineState === "Win") {
    //     correctCuisine = cuisine
    // }

    return (
        <div className="TopComponents" >
            <div className="DishImage" >
                <image> {image} </image>
            </div>
            <div className="DishInfo" >
                Dish: {correctDish}  <br />
                Cuisine: {correctCuisine} <br />
            </div>
        </div>

    )
}