import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      le
      <h1>Todo</h1>
      <input type="text" onChange={
        function (e) {
          console.log(e.target.value);
        }
      } 
      
      
      />
      <button onClick={function (e) {
        console.log(e.target);
      }}>Add</button>
      <ul>
        <li>test text <button>remove</button></li>
      </ul>
    </>
  )
}

export default App
