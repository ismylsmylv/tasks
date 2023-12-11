import { configureStore } from "@reduxjs/toolkit";
import adderSlice from "../redux/adderSlice";
import blogSlice from "./blogSlice";
export const store = configureStore({
    reducer: {
        adder: adderSlice,
        blog: blogSlice
    }
})