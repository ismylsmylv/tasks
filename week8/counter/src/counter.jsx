import React from 'react'
import { useState } from 'react'

function Count() {
    let [value, setValue] = useState(0)
    // console.log(setValue);
    return (
        <>
            <button onClick={function (e) {
                if (value > 0) {
                    { setValue(--value) }
                    console.log(value);
                }

            }}>decrease</button>
            <p>{value}</p>
            <button onClick={function (e) {
                { setValue(++value) }
                console.log(value);
            }}>increase</button>
        </>
    )
}

export default Count