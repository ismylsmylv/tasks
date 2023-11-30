import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./slices/pizzaSlice";
export const store = configureStore({
    reducer: {
        pepp: pizzaSlice
    }
})