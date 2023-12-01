import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./counterSlice";
export const store = configureStore({
    reducer: {
        todo: todoSlice
    }

})