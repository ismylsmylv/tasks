import { useState } from 'react'
import './App.css'
import Student from './student'
import Ages from "./age"
import Datas from './data'

function App() {

  return (
    <>
      <div className='cardMain'>
        <Student/>
        <Ages/>
        <Datas/>
      </div>
    </>
  )
}

export default App
