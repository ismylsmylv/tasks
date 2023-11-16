import { useState } from 'react'
import './App.css'
import LoginForm from './components/loginForm'
import SignForm from './components/signForm'
import TableMain from './components/table'

function App() {
  const [check, setCheck] = useState(true)
  const [isLogged, setisLogged] = useState(false);
  return (
    <>
      {
        check ? <LoginForm setCheck={setCheck} isLogged={isLogged} setisLogged={setisLogged} /> : <SignForm setCheck={setCheck} />
      }
      <TableMain />

    </>
  )
}

export default App
