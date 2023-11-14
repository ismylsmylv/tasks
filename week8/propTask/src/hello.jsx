import React from 'react'
import PropTypes from "prop-types";
function Hello(props) {
    let arr = props.hobbies
    // let { name, surname, age, hobbies } = props
    return (
        <>

            <h4>{props.name} {props.surname}, {props.age}</h4>
            {/* <h4>{name} {surname}, {age}</h4> */}
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

Hello.proptype = {
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array.isRequired
}
export default Hello
