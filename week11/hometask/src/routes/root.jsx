import Signup from "../pages/Signup"
import Login from "../pages/Login"
import { Link, Outlet } from "react-router-dom"

export default function Root() {
    return (
        <>
            <p>Root navigation</p>
            {/* <a href={"/login"}>login</a> */}
            {/* <a href={"/sign up"}>sign up</a> */}
            <ul>
                <li><Link to="/table" >to table</Link></li>
                <li><Link to="/signup"> to sign up</Link></li>
                <li><Link to="/login"> to login</Link></li>
            </ul>
            <Outlet />

        </>


    )



}