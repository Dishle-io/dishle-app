import React from 'react'

export default function GuessContainer(props) {
  const { func, guess, setGuess } = props

  return (
    <div>GuessContainer

      <input id='guess' placeholder='Your guess' onChange={(e) =></div> setGuess(e.target.value)}></input>
      <button onClick={func(document.getElementById('guess'))}>Guess</button>
    </div>
  )
}
