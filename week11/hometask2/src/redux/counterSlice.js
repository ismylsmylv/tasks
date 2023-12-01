import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    temp: ""
}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setTodo: (state, action) => {
            state.temp = action.payload
            console.log(state.temp)
        },
        addTodo: (state, action) => {
            console.log("addtodo")
            state.todos.push(state.temp)

        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(elem => elem != action.payload)
        }
    }
})

export const { addTodo, setTodo, todos, deleteTodo } = todoSlice.actions
export default todoSlice.reducer