import React, { useState, useContext } from 'react';
import { selectDish, selectCuisine, selectType, selectImage } from '../App'
// import {} from 'react-redux'

export default function TopComponents(props) {

    const { dish, cuisine, category } = props
    
    
    return (
        <div className="TopComponents" >
            <div className="DishImage" >
                <image> {image} </image>
            </div>
            <div className="DishInfo" >
                Dish: {dish}  <br />
                Cuisine: {cuisine} <br />
                Type: {category}  <br />
            </div>
        </div>

    )
}