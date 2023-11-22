import { useState } from 'react'
import './App.css'
import Inputs from './components/Inputs.jsx'
import List from "./components/List.jsx"
function App() {
  const [task, settask] = useState("");
  const [listed, setlisted] = useState([]);
  return (
    <>
      <Inputs task={task} settask={settask} listed={listed} setlisted={setlisted} />
      <List listed={listed} setlisted={setlisted} />
    </>
  )
}

export default App
