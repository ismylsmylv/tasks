import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Table() {
    return (
        <div>Table
            <ul><li>
                <Link to="/table/add">to add</Link>
            </li></ul>
            <Outlet />

        </div>
    )
}

export default Table