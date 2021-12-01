import React from 'react'
import SignInUp from '../SignInUp/SignInUp'
import "./HeaderTop.css"

const HeaderTop = () => {

    function textChange(e){
        e.target.placeholder = "Search for title, actors, directors"
    }
    function textOnBlur(e){
        e.target.placeholder = "Search..."
    }

    return (
        <div className="top">
            <h5 className="logo">Sky Store</h5>
            <SignInUp />
            <input type="text" className="inputfield" onFocus={textChange} onBlur={textOnBlur} placeholder="Search..." />
            <i className="fas fa-search"></i>
        </div>
    )
}

export default HeaderTop
