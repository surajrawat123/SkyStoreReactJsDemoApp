import React from 'react'
import { Link } from 'react-router-dom'
import HeaderTop from '../HeaderLogo/HeaderTop'
import "./Header.css"

const Header = () => {
    return (
        <header className="header"> 
            <HeaderTop />
            <ul className="nav-bar">
                <li className="nav-item">
                    <Link className="link home" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="/sports">Movies</Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="/premium">Sky Store Premiere</Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="/about">Sale</Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="/SkyVipFridaySale">Sky Vip</Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="/TV">TV</Link>
                </li>
                <li className="nav-item reedem">
                    <Link className="link" to="/ReedemVocher">Reedem Vocher</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
