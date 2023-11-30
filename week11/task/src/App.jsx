import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { pizzaSlice } from './redux/slices/pizzaSlice';
import { addTopping, gluten } from './redux/slices/pizzaSlice';
function App() {
  const pizza = useSelector(state => state.pepp.pizza)
  const glutenFree = useSelector(state => state.pepp.glutenFree)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Pizza</h1>
      {/* toppings */}
      <ul>

        {
          pizza?.map((elem, i) => {
            return (<li key={i}>{elem.title}</li>)
          })
        }
      </ul>
      <p>Gluten Free: {glutenFree ? "true" : "false"}</p>

      <button onClick={() => {
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
      }}>Gluten free</button>
    </>
  )
}

export default App
