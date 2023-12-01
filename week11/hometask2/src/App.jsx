import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from "react-redux"
import { addTodo, setTodo, todos, deleteTodo } from './redux/counterSlice'
function App() {
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()
  return (
    <>
      <h2>Todo</h2>
      <input type="text" onChange={(e) => {
        dispatch(setTodo(e.target.value))
      }} />
      <button onClick={() => {
        dispatch(addTodo())
      }}>Add</button>

      <ul>
        {todos.map((elem, i) => {
          return <li key={i}>{elem}
            <button onClick={() => {
              dispatch(deleteTodo(elem))
            }}>Delete</button>
          </li>
        })}
      </ul>
    </>
  )
}

export default App
