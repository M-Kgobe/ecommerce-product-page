import React from "react"
import logo from "../images/logo.svg"
import avatar from "../images/image-avatar.png"
import cart from "../images/icon-cart.svg"

function Header(){
    return(
        <header id="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="nav-bar">
                <ul className="nav-links">
                    <li><a href="#collections">Collections</a></li>
                    <li><a href="#men">Men</a></li>
                    <li><a href="#women">Women</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <ul className="account">
                    <li><a href="#!"><img src={cart} alt="cart"/></a></li>
                    <li><a href="#!"><img src={avatar} alt="avatar"/></a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header