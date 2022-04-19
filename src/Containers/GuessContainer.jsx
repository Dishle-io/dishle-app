import React from 'react'

export default function GuessContainer(props) {
  const { func, setGuess } = props

  return (
    <div>GuessContainer
      <input id='guess' placeholder='Your guess' onChange={(e) => setGuess(e.target.value)}></input>
      <button onClick={func}>Guess</button>
    </div>
  )
}
