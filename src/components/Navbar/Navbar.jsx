import React from 'react';
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
    return(
    <nav>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <nav className='navbar'>
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
        </nav>
        <div class="hamburgesa">
            <i class="bi bi-list"><TiThMenu/></i>
        </div>
    </nav>
    )
}

export { Navbar }