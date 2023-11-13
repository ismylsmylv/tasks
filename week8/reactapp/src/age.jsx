import React from 'react'
import students from "./students"

function Ages() {
    let sum=0
    for (let elem of students) {
        sum += elem.salary
    }
    return (
        <div className='salary'>Avarage salary  is {Math.round(sum/students.length)}</div>
    )
}

export default Ages