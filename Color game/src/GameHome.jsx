import { useState } from 'react'

export default function GameHome() {
  // colors array
  const colors = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FF00FF',
    '#00FFFF',
  ]

  const [gameStatus, setGameStatus] = useState('')
  const [gameScore, setGameScore] = useState(0)
  const [targetColor, setTargetColor] = useState(getTargetColor(colors))



  // randomly generate the target color from colors array
  function getTargetColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length)

    return colors[randomIndex]
  }

  // handles the click of any of the buttons and displays game status
  function handleColorClick(clickedColor) {
    const isCorrect = clickedColor === targetColor
    setGameStatus(isCorrect ? 'Correct!' : 'Wrong!')
    setGameScore(isCorrect ? (prevScore) => prevScore + 1 : 0)

    if (isCorrect) {
      setTargetColor(getTargetColor(colors)) // Update target color for next round
    }

    setTimeout(() => {
      setGameStatus('')
    }, 500)
  }

  // resets the game
  function handleReset() {
    setGameScore(0)
    setGameStatus('')
    setTargetColor(getTargetColor(colors))
  }

  //  map the color options from the colors array
  const colorOptions = colors.map((color) => (
    <button
      key={color}
      className={`colorOption ${color}`}
      data-testid="colorOption"
      style={{ backgroundColor: color }}
      onClick={() => handleColorClick(color)}
    />
  ))

  return (
    <>
      <div
        className="colorBox"
        data-testid="colorBox"
        style={{ backgroundColor: targetColor }}
      ></div>
      <h1 className="gameInstructions" data-testid="gameInstructions">
        Guess the correct color!
      </h1>
      <div className="colorContainer">{colorOptions}</div>
      <div
        className={`gameStatus
    ${gameStatus ? 'visible' : ''}
    ${gameStatus === 'Correct!' ? 'correct' : 'wrong'}`}
        data-testid="gameStatus"
      >
        {gameStatus}
      </div>
      <div className="score" data-testid="score">
        {gameScore}
      </div>

      <button
        className="newGameButton"
        data-testid="newGameButton"
        onClick={handleReset}
      >
        New Game
      </button>
    </>
  )
}
