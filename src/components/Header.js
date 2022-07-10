import React from "react"
import logo from "../images/logo.svg"
import avatar from "../images/image-avatar.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";


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
                    <li className="cart"><a href="#!"><FontAwesomeIcon icon={faCartShopping}/></a></li>
                    <li className="avatar"><a href="#!"><img src={avatar} alt="avatar"/></a></li>
                </ul>
                <div className="my-cart">
                    <h2>Cart</h2>
                    <hr/>
                    <div className="item"></div>
                    <button className="checkout">Checkout</button>
                </div>
            </nav>

        </header>
    )
}

export default Header