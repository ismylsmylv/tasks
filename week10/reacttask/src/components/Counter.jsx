import React from 'react'
import Counter from './useCounter'
// import { increment, decrement, reset, count } from './useCounter'
function CounterMain() {
    let { increment, decrement, reset, count } = Counter(0)
    return (
        <>
            <button onClick={() => {
                increment()
            }}>increase</button>
            <button onClick={() => {
                decrement()
            }}>decrease</button>
            <button onClick={() => {
                reset()
            }}>reset</button>
            <h3>{count}</h3>

        </>
    )
}

export default CounterMain