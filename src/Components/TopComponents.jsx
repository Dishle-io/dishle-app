import React from 'react';
// import { selectDish, selectCuisine, selectType, selectImage } from '../App'
// import {} from 'react-redux'
import Blur from 'react-blur'

export default function TopComponents(props) {

    const { dish, cuisine, gameState, cuisineWinState, image, blurRadius } = props
    // console.log('blurRadius', blurRadius)
    let correctDish;
    let correctCuisine;
    let winner

    if (gameState === "Win") {
        correctDish = dish
        correctCuisine = cuisine
        winner = "WINNER!"
    }

    if (cuisineWinState === "Win") {
        correctCuisine = cuisine
    }

    return (
        <div className="TopComponents" >
            <div className="DishInfo" >
                {winner} <br/>
                DISH: {correctDish}  <br />
                CUISINE: {correctCuisine} <br />
                <br/>
            <Blur style={{minHeight: 'auto'}} img = {image} blurRadius={blurRadius}></Blur>
            </div>
        </div>

    )
}