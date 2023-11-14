import React from 'react'
import PropTypes from "prop-types";
function Hello(props) {
    let arr = props.hobbies
    return (
        <>

            <h4>{props.name} {props.surname}, {props.age}</h4>
            <ul>
                {
                    arr.map((elem, i) => {
                        return <li key={i}>{elem}</li>
                    })
                }
            </ul>
        </>
    )
}

export default Hello
Hello.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array
}