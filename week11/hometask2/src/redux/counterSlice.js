import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    temp: ""
}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setTodo: (state, value) => {
            state.temp = value.payload
            console.log(state.temp)
        },
        addTodo: (state, value) => {
            console.log("addtodo")
            state.todos.push(state.temp)
        }
    }
})

export const { addTodo, setTodo, todos } = todoSlice.actions
export default todoSlice.reducer