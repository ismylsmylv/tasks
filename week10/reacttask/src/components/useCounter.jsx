import { useState } from "react"
export default function Counter(start) {
    const [count, setcount] = useState(start);
    function increment(start) {
        return setcount(count + 1)
    }
    function decrement(start) {
        return setcount(count - 1)
    }
    function reset() {
        return setcount(0)
    }
    return {
        increment, decrement, reset, count, start
    }
}