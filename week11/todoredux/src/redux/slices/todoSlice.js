import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const initialState = {
    todos: []
}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let obj = {
                id: uuidv4(),
                title: action.payload
            }
            state.todos.push(obj)

        }
    }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
