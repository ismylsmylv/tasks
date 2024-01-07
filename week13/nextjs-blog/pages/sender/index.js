import React from 'react'
import axios from 'axios'
export default function index() {
    return (
        <div>
            <button onClick={() => {
                let obj = {
                    "name": "ssdsdasdsadsda"
                }
                axios.post("http://localhost:3000/api", obj)
                console.log("aaasasa")
            }}>Send</button>
        </div>
    )
}
