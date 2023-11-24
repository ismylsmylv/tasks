import React from 'react'
import { useState, useReducer } from 'react'

function Adder(state, action) {
  switch (action.type) {
    case "add":
      return state = [...state, action.value]
  }
}
function App() {
  const [todo, settodo] = useState("");
  const [list, dispatch] = useReducer(Adder, [])
  return (<>
    <input type="text" onChange={(e) => {
      settodo(e.target.value)


    }}
      value={todo} />
    <button onClick={() => {
      dispatch({
        type: "add",
        value: todo
      })
    }}>Add</button>
    <ul>

      {list.map((elem, i) => {
        return <li key={i}>{elem}</li>
      })}
    </ul>
  </>
  )
}

export default App