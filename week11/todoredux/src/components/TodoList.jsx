import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
function TodoList() {
    const todos = useSelector((state) => state.todo.todos);
    console.log(todos)
    return (
        <ul>
            {
                todos.map(elem => {

                    return (<li key={uuidv4()}>{elem.title}</li>)
                })
            }
        </ul>
    )
}

export default TodoList