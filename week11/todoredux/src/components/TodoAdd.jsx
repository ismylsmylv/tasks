import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from '../redux/slices/todoSlice';

function TodoAdd() {
    const todos = useSelector(state => state.todo.todos)
    const [input, setinput] = useState("");
    const dispatch = useDispatch()
    console.log(input)
    console.log(todos)
    return (
        <>
            <input type="text" onChange={(e) => {

                setinput(e.target.value)
                console.log(input)
            }} />
            <button onClick={() => {
                dispatch(addTodo(input))
            }}>add</button>

        </>
    )
}

export default TodoAdd