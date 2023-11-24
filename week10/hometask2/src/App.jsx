import React, { useState, useReducer } from 'react'
function Adder(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.value]
    case "delete":
      return []
      
    default:
      break;
  }
}
function App() {
  const [todo, settodo] = useState("")
  const [state, dispatch] = useReducer(Adder, [])
  return (
    <>
      <input type="text" onChange={(e) => {
        settodo(e.target.value)
      }} />
      <button onClick={() => {
        dispatch({
          type: "add", value: todo
        })
        settodo([])
      }}>Add</button>
      <button onClick={
        () => {
          dispatch({
            type: "delete"
          })
        }
      }>Delete</button>



      <ul>
        {state.map((elem, i) => {
          return <li key={i}>{elem}</li>
        })}
      </ul>


    </>
  )
}

export default App