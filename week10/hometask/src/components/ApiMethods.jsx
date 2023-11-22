import React, { useReducer } from 'react'
function reducer(state, action) {
    switch (action.type) {
        case "addition":
            return {
                value: action.value + 5
            }
        case "division":
            return {
                value: action.value / 5
            }
    }
}
function ApiMethods() {
    const [state, dispatch] = useReducer(reducer, { value: 0 })
    return (
        <>
            <input type="number" onChange={(e) => {
                dispatch({
                    type: "addition",
                    value: e.target.value
                })
            }} />
            <p>{state.value}</p>
        </>
    )
}

export default ApiMethods