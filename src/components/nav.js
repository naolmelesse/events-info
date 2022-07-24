import React from 'react'
import '../App.scss';
import '../styles/nav.scss'
import logo from '../assets/logo.png';
const Nav = () =>{

    return(
        <div className="nav-container">
            <div className="nav">
                <div ><img className="logo" src={logo} alt="logo" /></div>
                <div className="nav-items">
                    <a href="/">Home</a>
                    <a href="">About</a>
                    <a href="/service">Service</a>
                    <a href="/contact-us">Contact</a>
                    <button className="login-btn" href="">Login/Sign-up</button>
                </div>
            </div>
            
        </div>
    )
}

export default Nav;