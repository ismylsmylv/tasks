import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { pizzaSlice } from './redux/slices/pizzaSlice';
import { addTopping, gluten, add, remover } from './redux/slices/pizzaSlice';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const pizza = useSelector(state => state.pepp.pizza)
  const glutenFree = useSelector(state => state.pepp.glutenFree)
  const dispatch = useDispatch()
  const inputText = useRef()
  return (
    <>
      <h1>Pizza</h1>

      <input type="text" ref={inputText} onChange={(e) => {
        console.log(e.target.value)

      }} />
      <ul>
        {
          pizza?.map((elem) => {
            return (<li key={elem.id}>{elem.title} <button onClick={() => {
              dispatch(remover(elem.id))
              console.log(elem.id)
            }}>remove</button></li>)
          })
        }
      </ul>
      {/* <p>Gluten Free: {glutenFree ? "true" : "false"}</p> */}
      {/* <button onClick={() => {
        console.log(pizza)
        dispatch(addTopping("pepperoni"))
      }}>Add pepperoni</button>
      <button onClick={() => {
        console.log(pizza)
        dispatch(addTopping("anchovies"))
      }}>Add anchovies</button>
      <button onClick={() => {
        console.log(pizza)
        dispatch(addTopping("olives"))
      }}>Add olives</button>
      <button onClick={() => {
        dispatch(gluten())
      }}>Gluten free</button> */}
      <button onClick={() => {
        console.log(
          inputText.current.value
        )

        dispatch(add(inputText.current.value))
        inputText.current.value = ""
      }}>Add</button>
    </>
  )
}

export default App
