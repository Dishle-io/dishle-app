import React from 'react'
import Button from '@mui/material/Button';

export default function GuessContainer(props) {
  const { func, setGuess } = props

  return (
    <div>GuessContainer
      <input id='guess' placeholder='Your guess' onChange={(e) => setGuess(e.target.value)}></input>
      <Button variant="contained" onClick={func}>Guess</Button>
    </div>
  )
}
