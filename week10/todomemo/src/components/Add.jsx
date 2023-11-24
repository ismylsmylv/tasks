import { memo } from "react"
import React from 'react'

function Add({ setTodo, addTodo, getSearch }) {
    console.log("add rendered")
    return (
        <>
            <h3>Search</h3>
            <input type="text" onChange={getSearch} />
            <br />
            <h3>Add</h3>
            <input type="text" onChange={(e) => {
                setTodo(e)
            }} />
            <button onClick={(e) => {
                addTodo()
            }}>Add</button>


        </>
    )
}

// export default (Add)
export default memo(Add)