import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    blog: "",
    blogName: "",
    blogText: ""
}

export const adderSlice = createSlice({
    name: "adder",
    initialState,
    reducers: {
        addName: (state, action) => {
            state.blogName = action.payload
            console.log(action.payload)
        },
        addText: (state, action) => {
            state.blogTitle = action.payload
            console.log(action.payload)
        },
        addBlog: (state) => {
            let obj = {
                name: state.blogName,
                text: state.blogTitle
            }
            axios.post("https://6576df5f197926adf62ca419.mockapi.io/bloglist", obj)
            console.log(obj)
        },
        deleteBlog: (state, action) => {
            axios.delete("https://6576df5f197926adf62ca419.mockapi.io/bloglist/" + action.payload)
            console.log(action.payload)
        }

    }


})








export const { addName, addText, addBlog, deleteBlog } = adderSlice.actions
export default adderSlice.reducer