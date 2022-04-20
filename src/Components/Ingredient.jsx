import React from 'react'
import { ListItemText } from '@mui/material'
export default function Ingredient(props) {
  const { name } = props;
  const { isReveal } = props;
  // const style = {
  //   width: '100%',
  //   maxWidth: 360,
  //   bgcolor: 'grey',
  //   padding: 2
  // };

  return (
    <ListItemText variant='outlined' primary={(isReveal ? name : "Mystery Meat")}></ListItemText>
  )
}
