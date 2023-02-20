import React from 'react';
import './Hero.css'
import heroimg from '../../assets/heroImg.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Hero = () => {
    return(
        <section class="hero">
            <div class="contenedorHero">
                
                <div class="contenedorTextoHero">
                    <h1 class="tituloHero">I'm <strong> Juan Oviedo Runzio</strong></h1>
                    <h2 class="subtituloHero">Entrepreneur, front-end developer, UI & UX designer and student.</h2>
                </div>
                <div class="imagenHero">
                    <img  src={heroimg} alt=""/>
                </div>
               
            </div> 
            <div class="logosHero">
                    <div class="iconosHero">
                        <a href="https://www.linkedin.com/in/juan-runzio-54551b22b"><i class="bi bi-linkedin"><FaLinkedin/></i></a>
                        <a href="https://github.com/juanchitho"><i class="bi bi-github"><FaGithub/></i></a>
                        <a href="https://www.instagram.com/juanrunzio/"><i class="bi bi-instagram"><FaInstagram/></i></a>
                        <a href=""><i class="bi bi-facebook"><FaFacebook/></i></a>
                        <a href="https://twitter.com/juan7a7a"><i class="bi bi-twitter"><FaTwitter/></i></a>
                    </div>
                    <div>
                        <p>jbauti9@gmail.com</p>
                    </div>
                </div>
        </section>
    )
}

export { Hero }