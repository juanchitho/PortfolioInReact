import React from 'react';
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return(
    
        <>
            <footer className ='footer' id="contact">
                <section className ='footerItself'>
                    <h1>Just say hi.</h1>
                    <h2>I'm always open to discuss your project and talk about new things.
                    </h2>
                    <div className='ultimasDosCajas'>
                        <div>
                            <p>Mail me at</p>
                            <a>jbauti9@gmail.com</a>
                        </div>
                        <div>
                            <p>Follow me</p>
                            <div class="iconosFooter">
                                <a href="https://www.linkedin.com/in/juan-runzio-54551b22b"><i class="bi bi-linkedin"><FaLinkedin/></i></a>
                                <a href="https://github.com/juanchitho"><i class="bi bi-github"><FaGithub/></i></a>
                                <a href="https://www.instagram.com/juanrunzio/"><i class="bi bi-instagram"><FaInstagram/></i></a>
                                <a href=""><i class="bi bi-facebook"><FaFacebook/></i></a>
                                <a href="https://twitter.com/juan7a7a"><i class="bi bi-twitter"><FaTwitter/></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="form">
                    <form action="https://formspree.io/f/mvongjoa" method="POST">
                        
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombreUsuario"/>
                        
                        <label htmlFor="correo">Correo Electronico:</label>
                        <input type="email" id="correo" name="correoUsuario"/>
                        <label htmlFor="Asunto">Asunto:</label>
                        <input type="text" id="Asunto" name="Asunto"/>
                        
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea name="mensaje" id="mensaje"></textarea>
                        
                        <input type="submit" value="SUBMIT"/>   
                    </form>
                </section>
            </footer>
        </>
    )
}

export { Footer }