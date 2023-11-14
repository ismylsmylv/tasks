import { useState } from 'react'
import './App.css'
import Mode from "./mode"
import Count from "./counter"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count />
      <Mode />
    </>
  )
}

export default App
