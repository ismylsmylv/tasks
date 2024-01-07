import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface CounterState {
  value: number;
  todos: string[];
  todo: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  todos: [],
  todo: "",
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    adder: (state, action: PayloadAction<string>) => {
      // console.log(action.payload);
      // state.todos = [...state.todos, action.payload];
      state.todos = [...state.todos, state.todo];
      // console.log(state.todos);
    },
    getter: (state, action: PayloadAction<string>) => {
      // console.log(action.payload);
      state.todo = action.payload;
      // console.log(state.todo);
    },
    empty: (state) => {
      state.todo = "";
    },
    deleter: (state, action) => {
      // console.log(action.payload);
      state.todos = state.todos.filter((elem) => elem != action.payload);
    },
    editer: (state, action) => {
      console.log(action.payload[0]);
      state.todos = state.todos.map((elem) =>
        elem == action.payload[0] ? action.payload[1] : elem
      );
    },
  },
});

export const { adder, getter, empty, deleter, editer } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
