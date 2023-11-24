import React from 'react'
import { memo } from 'react'
function List({ setTodo, addTodo, list }) {
    console.log("list rendered")
    return (
        <ul>
            {
                list?.map((elem, i) => {
                    return <li key={i}>{elem}</li>
                })
            }


        </ul>
    )
}

// export default (List)
export default memo(List)