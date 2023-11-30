import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const initialState = {
    pizza: [],
    glutenFree: false,
    ings: ["pepperoni", "anchovies", "olives"]
}
export const pizzaSlice = createSlice({
    name: "pepp",
    initialState,
    reducers: {
        // addTopping: (state, action) => {
        //     let obj = {
        //         title: action.payload
        //     }
        //     state.pizza.push(obj)

        //     console.log(state.pizza)
        // },
        // gluten: (state) => {
        //     return { ...state, glutenFree: !state.glutenFree }
        // },
        add: (state, action) => {
            if (state.ings.find(elem =>
                elem.toLowerCase().trim() == action.payload.toLowerCase().trim()
            )) {
                if (state.pizza.find(elem =>
                    elem.title.toLowerCase().trim() == action.payload.toLowerCase().trim()
                )) {
                    window.alert("already in")
                }
                else {
                    let obj = {
                        id: uuidv4(),
                        title: action.payload
                    }
                    state.pizza.push(obj)
                }
            }
            else {
                window.alert("not an ingredient")
            }



        },
        remover: (state, action) => {
            state.pizza = state.pizza.filter((elem) => elem.id != action.payload)
        }
    }

})
export const { addTopping, gluten, add, remover } = pizzaSlice.actions
export default pizzaSlice.reducer