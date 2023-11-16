import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function SignForm({ setCheck }) {
    const [signName, setsignName] = useState("");
    const [signPass, setsignPass] = useState("");
    const [signEmail, setsignEmail] = useState("");
    const [isCheck, setisCheck] = useState(false);

    return (
        <div className='formLogin'>
            <label htmlFor="text">Username</label>
            <input type="text" id='text' placeholder='enter username' onChange={(e) => {
                setsignName(e.target.value)
                console.log(signName)
            }} />
            <label htmlFor="email" >Email</label>
            <input type="email" id='email' placeholder='enter email' onChange={(e) => {
                setsignEmail(e.target.value)
                console.log(signPass)
            }} />
            <label htmlFor="pass" >Password</label>
            <input type="password" id='pass' placeholder='enter password' onChange={(e) => {
                setsignPass(e.target.value)
                console.log(signEmail)
            }} />


            <button onClick={
                (e) => {
                    e.preventDefault()
                    let user = {
                        "username": signName,
                        "email": signEmail,
                        "password": signPass
                    }
                    axios.post("https://654bcb115b38a59f28efb8ab.mockapi.io/users", user).then(
                        console.log(user)
                    )
                    setCheck(true)
                }
            }>sign up</button>
            <button onClick={() => {
                setCheck(true)
                console.log("first")
            }}>log in instead</button>
        </div>
    )
}

export default SignForm