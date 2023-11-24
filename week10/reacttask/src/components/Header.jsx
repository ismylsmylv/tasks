import React from 'react'

function Header({ setlist, list, todo, settodo, Adder }) {
    return (
        <>
            <input type="text" onChange={
                (e) => {
                    settodo(e.target.value)
                    console.log(todo)
                    console.log(list)
                }
            } />
            <button onClick={() => {
                setlist([...list, todo])
                console.log(list)
            }}>Add</button>
            <button onClick={() => {
                setlist([])
            }}>delete</button>
        </>
    )
}

export default Header