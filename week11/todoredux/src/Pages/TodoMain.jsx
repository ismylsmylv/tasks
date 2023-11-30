import React from 'react';
import TodoAdd from '../components/TodoAdd';
import TodoList from '../components/TodoList';
function TodoMain() {
    return (
        <>
            <h2>Todo</h2>
            <TodoAdd />
            <TodoList />
        </>
    )
}

export default TodoMain