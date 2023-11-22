import React from 'react'
import { useReducer } from 'react'
import useCounter from './CountHook'
function Counter() {
    let { increment, decrement, reset, count } = useCounter(0)
    return (
        <>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <p>{count}</p>

        </>
    )
}

export default Counter