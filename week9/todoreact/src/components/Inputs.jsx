import React from 'react'

function Inputs({ task, settask, listed, setlisted }) {
    console.log(task)
    return (
        <>
            <input type="text" onChange={(e) => {
                settask(e.target.value)
                console.log(task)
            }} />
            <button onClick={(e) => {
                setlisted([...listed, task])
            }
            }
            >Add</button>
        </>
    )
}

export default Inputs