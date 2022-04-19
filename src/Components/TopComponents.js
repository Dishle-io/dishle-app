import React, { useState, useContext } from 'react';
import { selectDish, selectCuisine, selectType, selectImage } from './App'
// import {} from 'react-redux'

export function TopComponents() {
    
    const {selectDish, selectCuisine, selectType}
    // const dish = selectDish()
    //const cuisine = selectCuisine()
    //const type = selectType()
    //const image = selectImage()
    const dish = "Brushetta"
    const cuisine = "Italian"
    const type = "Appetizer"
    const image = "image"

    return (
        <div className="TopComponents" >
            <div className="DishImage" >
                <image> {image} </image>
            </div>
            <div className="DishInfo" >
                Dish: {dish}  <br />
                Cuisine: {cuisine} <br />
                Type: {type}  <br />
            </div>
        </div>

    )
}