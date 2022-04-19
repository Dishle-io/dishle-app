import React from 'react'

export default function Ingredient(props) {
  const { name } = props;
  const { isReveal } = props;

  console.log('is reveal', isReveal)
  
	return (
    <div>{(isReveal ? name : "Mystery Meat")}</div>
  )
}
