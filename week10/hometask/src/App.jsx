import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import ApiMethods from './components/ApiMethods'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* count */}
      <h2>Counter</h2>
      <Counter />
      <br />
      {/* todo */}
      <h2>Todo</h2>
      <TodoList />
      <br />
      {/* api */}
      <ApiMethods />
    </>
  )
}

export default App
