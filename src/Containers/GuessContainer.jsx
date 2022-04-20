import React from 'react'
import Button from '@mui/material/Button';

export default function GuessContainer(props) {
  const { func, setGuess, gameState } = props
  console.log(gameState);

  if (gameState === 'Win') {
    return (
      <div>You Win</div>
    )
  } else if (gameState === 'Lose') {
    return (
      <div>You Lost</div>
    )
  } else {
    return (
      <div>
        <input id='guess' autoComplete="off" placeholder='Your guess' onChange={(e) => setGuess(e.target.value)} onKeyPress = {event => {
          if (event.key === 'Enter') {
            func()
          }
        }}></input>
        <Button variant="contained" color="success" onClick={func} >Guess</Button>
      </div>
    )
  }
}
