import React from 'react'

export default function GuessContainer(props) {
  const { func } = props

  return (
    <div>GuessContainer

      <input id='guess' placeholder='Your guess'></input>
      <button onClick={func(document.getElementById('guess'))}>Guess</button>
    </div>
  )
}
