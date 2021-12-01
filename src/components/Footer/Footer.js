import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-bar">
                <li className="nav-item">
                    <Link className="link" to="/aboutus">About us</Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="/contactus">Contact us</Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="/term">Terms and Condition</Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="/privacy">Privacy and Condition</Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="/option">Privacy Option</Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="/help">Help</Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="/ReedemVocher">Reedem Vocher</Link>
                </li>
            </ul>
            <div className="footer-text">
                <div>
                    <span>United Kingdom and Republic of Ireland | Deutschland und Österreich</span>
                </div>
                <div>
                    <span>&copy;Sky UK All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
