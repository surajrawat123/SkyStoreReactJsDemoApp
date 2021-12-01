import React from 'react'
import { Link } from 'react-router-dom'
import "./SignInUp.css"

const SignInUp = () => {
    return (
        <>
            <ul className="nav-bar1">
                <li className="nav-item1">
                    <Link className="link1" to="SignIn">Sign In</Link>
                </li>
                <li className="nav-item1">
                    <Link className="link1" to="SignIn">Sign Up</Link>
                </li>
            </ul>
        </>
    )
}

export default SignInUp
