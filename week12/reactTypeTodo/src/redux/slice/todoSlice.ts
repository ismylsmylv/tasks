import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
    addTodo: (state, action: PayloadAction<string>) => {
      console.log("object");
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
