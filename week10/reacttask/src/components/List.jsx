import React from 'react'

function List({ list, todo, setlist, settodo }) {
    return (
        <>
            <ul>
                {list.map((elem, i) => {
                    return <li key={i}>{elem}</li>
                })}
            </ul>
        </>
    )
}

export default List