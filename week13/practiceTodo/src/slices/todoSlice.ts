import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  todo: string;
  todos: string[];
}

const initialState: CounterState = {
  value: 0,
  todo: "",
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getInp: (state, action) => {
      console.log(action.payload);
      state.todo = action.payload;
    },
    addInp: (state) => {
      state.todos.push(state.todo);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getInp, addInp } = todoSlice.actions;

export default todoSlice.reducer;
