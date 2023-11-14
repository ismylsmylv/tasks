import React from 'react'
import { useState } from 'react'
function Mode() {
    let [value, setValue] = useState(false)
    return (
        <><div>

            <button onClick={function (e) {
                setValue(!value)
                if (!value) {
                    document.body.style.backgroundColor = "white"
                }
                else {
                    document.body.style.backgroundColor = "black"
                }
                console.log(value);
            }}>change mods</button>
        </div>
        </>
    )
}

export default Mode