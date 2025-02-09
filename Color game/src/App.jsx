import { useState } from 'react'
import './App.css'

import GameHome from './GameHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <GameHome />
      </main>
    </>
  )
}

export default App
