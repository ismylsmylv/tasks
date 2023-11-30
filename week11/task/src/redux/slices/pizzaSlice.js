import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    pizza: [],
    glutenFree: false
}
export const pizzaSlice = createSlice({
    name: "pepp",
    initialState,
    reducers: {
        addTopping: (state, action) => {
            let obj = {
                title: action.payload
            }
            state.pizza.push(obj)

            console.log(state.pizza)
        },
        gluten: (state) => {
            return { ...state, glutenFree: !state.glutenFree }
        }
    }

})
export const { addTopping, gluten } = pizzaSlice.actions
export default pizzaSlice.reducer