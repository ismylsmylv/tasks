import { useState } from "react";
export default function useCounter(start) {
    let [count, setCount] = useState(start);
    function increment() {
        return setCount(++count)
    }
    function decrement() {
        if (count >= 1) {
            return setCount(--count)
        }
    }
    function reset() {
        return setCount(0)
    }
    return {
        increment, decrement, reset, count
    }
}