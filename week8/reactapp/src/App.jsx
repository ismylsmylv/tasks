import { useState } from 'react'
import './App.css'
import Student from './student'
import Ages from "./age"

function App() {

  return (
    <>
      <div className='cardMain'>
        <Student/>
        <Ages/>
      </div>
    </>
  )
}

export default App
