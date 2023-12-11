import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import "../style/adder.scss"
import { addName, addText, addBlog } from "../redux/adderSlice"
function Adder() {
    const [inpName, setinpName] = useState("");
    const [inpText, setinpText] = useState("");
    const dispatch = useDispatch()
    return (
        <>
            <Navbar />
            <div className="adder">
                <form action="">
                    <h1>Add a blog</h1>
                    <input type="text" placeholder='Blog name' value={inpName} onChange={(e) => {
                        setinpName(e.target.value)
                        dispatch(addName(e.target.value))
                    }} />
                    <input type="text" placeholder='Text' value={inpText} onChange={(e) => {
                        setinpText(e.target.value)
                        dispatch(addText(e.target.value))
                    }} />
                    <button type='submit' onClick={(e) => {
                        e.preventDefault()
                        // let obj = {
                        //     "name": inpName,
                        //     "text": inpText,
                        // }
                        // console.log(obj)
                        // axios.post("https://6576df5f197926adf62ca419.mockapi.io/bloglist", obj)
                        dispatch(addBlog(inpText))
                        setinpName("")
                        setinpText("")
                    }}>Send</button>



                </form>
            </div>


        </>
    )
}

export default Adder