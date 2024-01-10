import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import axios from "axios";

// Define a type for the slice state
interface CounterState {
  value: number;
  datas: object[];
  backdatas: object[];
}
export const getAuth = createAsyncThunk("getAuth", async () => {
  const response = await axios("http://localhost:5000/");
  //   console.log(response.data);
  return response.data;
});
// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  datas: [],
  backdatas: [],
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    testLog: (state) => {
      console.log("redux");
    },
    deleteAuth: (state, action) => {
      state.datas = state.datas.filter((elem) => elem._id != action.payload);
      axios.delete("http://localhost:5000/api/" + action.payload);
    },
    searchAuth: (state, action) => {
      console.log(action.payload);
      if (action.payload != "") {
        state.datas = state.datas.filter(
          (elem) =>
            elem.name.toLowerCase().includes(action.payload.toLowerCase()) ||
            elem.surname.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else {
        state.datas = state.backdatas;
      }
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAuth.fulfilled, (state, action) => {
      // Add user to the state array
      state.datas = action.payload;
      state.backdatas = action.payload;
    });
  },
});

export const { testLog, deleteAuth, searchAuth } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
