import React from 'react'
import { useState } from 'react'
// import '../../src/App.css'
import axios from 'axios'
function LoginForm({ setCheck, isLogged, setisLogged }) {
    const [userName, setuserName] = useState("");
    const [userPass, setuserPass] = useState("");
    const [users, setusers] = useState([]);

    return (
        <div className='formLogin'>
            <label htmlFor="text">Username</label>
            <input type="text" id='text' placeholder='enter username' onChange={(e) => {
                setuserName(e.target.value)
                console.log(userName)
            }} />
            <label htmlFor="pass" >Password</label>
            <input type="password" id='pass' placeholder='enter password' onChange={(e) => {
                setuserPass(e.target.value)
                console.log(userPass)
            }} />

            <button onClick={
                (e) => {
                    e.preventDefault()
                    axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users").then(res => {
                        // console.log(res.data)
                        setusers(res.data)
                        console.log(isLogged)
                        for (let elem of users) {
                            if (elem.username == userName && elem.password == userPass) {
                                console.log("logged")
                                setCheck(false)
                                setisLogged(true)
                                console.log(isLogged)
                            }
                            else {
                                console.log("not")
                            }
                        }


                    })
                }

            }>log in</button>
            <button onClick={(e) => {
                e.preventDefault()
                setCheck(false)
                console.log("first")
            }}>sign in instead</button>
        </div>
    )
}



export default LoginForm