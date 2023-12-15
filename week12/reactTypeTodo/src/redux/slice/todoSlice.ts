import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export interface Todo {
  id: string;
  title: string;
}
export interface ToDoState {
  todo: Todo;
  todos: Todo[];
}

const initialState: ToDoState = {
  todo: { id: "", title: "" },
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodo: (state, action: PayloadAction<string>) => {
      const obj: Todo = {
        id: uuidv4(),
        title: action.payload,
      };
      state.todo = obj;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      console.log(state.todos);
    },
    listTodo: (state, action: PayloadAction<string>) => {
      state.todos = [...state.todos, state.todo];
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((elem) => elem.id != action.payload);
    },
  },
});

export const { getTodo, addTodo, listTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
