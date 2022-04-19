import React from 'react'

export default function Ingredient(props) {
  const { name } = props;
  const { isReveal } = props;


  return (
    <div>{(isReveal ? name : "Mystery Meat")}</div>
  )
}
