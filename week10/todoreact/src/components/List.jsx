import React from 'react'

function List({ setlisted, listed }) {
    return (
        <>
            <ul>
                {listed && listed.map((elem, i) => {
                    return <li key={i}>{elem}</li>
                })
                }
            </ul>
        </>
    )
}

export default List