import { useRef, useState } from 'react';
import { useDispatch, useSelector, } from "react-redux";
import './App.css';
import { add, remover, gluten, cook, cooked, getAll, getAllData } from './redux/slices/pizzaSlice';
function App() {
  const pizza = useSelector(state => state.pepp.pizza)
  const glutenFree = useSelector(state => state.pepp.glutenFree)
  const dispatch = useDispatch()
  const inputText = useRef()
  const [data, setdata] = useState([]);
  return (
    <>
      <h1>Pizza</h1>

      <input type="text" ref={inputText} onChange={(e) => {
        // console.log(e.target.value)

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
      <p>Gluten Free: {glutenFree ? "true" : "false"}</p>
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
      }}>Add olives</button> */}
      <button onClick={() => {
        dispatch(gluten())
      }}>Gluten free</button>
      <button onClick={() => {
        console.log(
          inputText.current.value
        )
        dispatch(add(inputText.current.value))
        inputText.current.value = ""
      }}>Add</button>
      <br />
      <button onClick={() => {
        dispatch(cook())
      }}>Cook</button>
      <br />
      <hr />


      {/* async */}
      <button onClick={() => {
        dispatch(getAll())
      }}>get all</button>
      <ul>
        {
          getAllData.map((elem, i) => {
            return <li key={i}>{elem.name}</li>
          })

        }

      </ul>





    </>
  )
}

export default App
