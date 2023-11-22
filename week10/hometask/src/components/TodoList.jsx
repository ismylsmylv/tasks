import React, { useState } from 'react'
function TodoList() {
    const [input, setinput] = useState("");
    const [list, setlist] = useState([]);
    return (
        <>
            <input type="text" onChange={
                (e) => {
                    setinput(e.target.value)
                    console.log(e.target.value)
                }
            } placeholder='todo' />
            <button onClick={() => {
                setinput("")
                console.log(list)
                console.log(input)
                setlist([...list, input])

            }}>add</button>
            <ul>
                {
                    list.map(elem => {
                        return <li>{elem}</li>
                    })
                }
            </ul>

        </>
    )
}

export default TodoList