import './App.css'
import CounterMain from './components/Counter'
import Header from './components/Header'
import List from "./components/List"
import { useState } from 'react'
import { useReducer } from 'react'
import Maintodo from './components/maintodo'
function Adder() {
  switch (action.type) {
    case "add":

      break;
    case "delete":

      break
  }
}

function App() {
  const [state, dispatch] = useReducer(Adder, { todo: "" })


  const [list, setlist] = useState([]);
  const [todo, settodo] = useState("");
  return (
    <>
      <Header adder={Adder} setlist={setlist} list={list} todo={todo} settodo={settodo} />
      <List setlist={setlist} list={list} todo={todo} settodo={settodo} />
      <CounterMain />
      <h4>Reducer Todo</h4>
      <Maintodo />
    </>
  )
}

export default App
