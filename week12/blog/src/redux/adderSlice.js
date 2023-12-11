import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let datas = await axios("https://6576df5f197926adf62ca419.mockapi.io/bloglist").data
const initialState = {
    blog: "",
    blogName: "",
    blogText: "",
    editName: "",
    editText: "",
    blogs: datas
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
        },
        editNameR: (state, action) => {
            state.editName = action.payload
            console.log(action.payload)
        },
        editTextR: (state, action) => {
            state.editText = action.payload
            console.log(action.payload)
        },
        editBlog: (state, action) => {
            let editedObj = {
                name: action.payload.name,
                text: action.payload.text,
                id: action.payload.id
            }
            axios.put("https://6576df5f197926adf62ca419.mockapi.io/bloglist/" + action.payload.id, editedObj)
            console.log(editedObj)
        },
        search: (state, action) => {
            console.log(action.payload)
            state.blogs = state.blogs.filter(elem => {
                elem.name == action.payload
            })
        }

    }


})


export const { addName, addText, addBlog, deleteBlog, editBlog, editNameR, editTextR, search } = adderSlice.actions
export default adderSlice.reducer