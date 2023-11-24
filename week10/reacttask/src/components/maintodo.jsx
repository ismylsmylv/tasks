import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react'
function Adder(state, action) {
    switch (action.type) {
        case "add":
            // console.log("add")
            return {
                value: [state, action.value]
            }
            // console.log(state)

            break;
        case "delete":
            console.log("delete")
            state = []
            console.log(state)
            break
    }
}


function Maintodo() {
    const [state, dispatch] = useReducer(Adder, { value: [] })
    return (
        <>
            <input type="text" onChange={
                (e) => {
                    // settodo(e.target.value)
                    // console.log(todo)
                    // console.log(list)
                    dispatch({
                        type: "add",
                        value: e.target.value
                    })
                }
            } />
            <button onClick={() => {
                dispatch({ type: "add" })
            }}>Add</button>
            <button onClick={() => {
                dispatch({ type: "delete" })
            }}>delete</button>
            <ul>
                {/* {state && state.map((elem, i) => {
                    return <li key={i}>{elem}</li>
                })} */}
            </ul>
            {/* <p>{state}</p> */}
            {console.log(state)}
        </>
    )
}

export default Maintodo