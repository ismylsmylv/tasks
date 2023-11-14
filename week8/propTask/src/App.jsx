import { useState } from 'react'
import './App.css'
import Hello from "./hello"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hello name={'jin'} surname={"surname"} age={32} hobbies={["books", "gaming"]} />
      <Hello name={'jin'} surname={"surname"} age={32} hobbies={["books", "gaming"]} />
    </>
  )
}

export default App
