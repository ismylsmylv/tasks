import React from 'react'
import students from "./students"
function Student() {

    return (

        students.map((elem, i, j, k) => {
            console.log(elem.name.localeCompare("sddsds"));
            return <ul className='list'>
                <li key={i}>id: {elem.id}</li>
                <li key={j}>Name: {elem.name}</li>
                <li key={k}>Salary: {elem.salary}</li>
            </ul>
        })

    )
}

export default Student