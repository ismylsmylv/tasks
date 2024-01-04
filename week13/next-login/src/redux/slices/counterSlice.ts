import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface CounterState {
  value: number;
  todos: string[];
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  todos: [],
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    adder: (state, action: PayloadAction<string>) => {
      // console.log(action.payload);
      state.todos = [...state.todos, action.payload];
      console.log(state.todos);
    },
  },
});

export const { adder } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
