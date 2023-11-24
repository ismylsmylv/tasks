import React from 'react'
import Add from './Add'
import List from './List'
import { useReducer } from 'react'

function Adder(state, action) {
    switch (action.type) {
        case "setTodo":
            // console.log("settodo")
            return {
                ...state,
                todo: action.todo,
            }
        case "addTodo":
            // console.log("addtodo")
            return {
                list: [...state.list, action.todo]
            }
        case "getSearch":
            return {
                ...state,
                search: action.search
            }
        default:
            break;
    }

}


function TodoApp() {
    const [state, dispatch] = useReducer(Adder, { todo: "", list: [], search: "" })
    const setTodo = (e) => {
        dispatch({
            todo: e.target.value,
            type: "setTodo"
        })
    }
    const addTodo = () => {
        dispatch({
            type: "addTodo",
            todo: state.todo
        })




    }
    const getSearch = (e) => {
        dispatch({
            type: "getSearch",
            search: e.target.value
        })
    }
    let search = state?.list?.filter((elem) => elem.includes(state?.search))

    return (
        <>
            <Add setTodo={setTodo} addTodo={addTodo} getSearch={getSearch} list={state.list} />
            {/* <List setTodo={setTodo} list={state.list} /> */}
            <List setTodo={setTodo} list={state.list} />
        </>
    )
}

export default TodoApp