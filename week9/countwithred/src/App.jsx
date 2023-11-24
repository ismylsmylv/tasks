import { useReducer, useState } from 'react'
import './App.css'
// import counter from './usereduce'
function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return {
        count: state.count + 1
      }
    case "decrease":
      return {
        count: state.count - 1
      }
    case "reset":
      return {
        count: 0
      }
  }
}
function App() {

  let [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <>
      <button onClick={
        () => {
          dispatch({
            type: "increase",

          })
        }}>
        Increase</button >

      <h3>{state.count}</h3>

      <button onClick={() => {
        dispatch({
          type: "decrease",
        })
      }
      }>Decrease</button>
      <br />
      <button onClick={() => {
        dispatch({
          type: "reset"
        })
      }}>Reset</button>
    </>
  )

}

export default App


//   counter()
//   let { increase, decrease, count } = counter()
//   return (
//     <>
//       <button onClick={increase}>Increase</button>
//       <h3>{count}</h3>
//       <button onClick={decrease}>Decrease</button>
//     </>
//   )
