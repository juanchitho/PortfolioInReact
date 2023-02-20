import React from 'react';
import './Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
    return(
        <div>
            <h1 class="textoWhatIdo" id="skills">Skills</h1>
        <section class="skills">
            <div>
                <i class="fab fa-html5"><FaHtml5/></i>
                <h3>HTML 5</h3>
            </div>
            <div>
                <i class="fab fa-css3-alt"><FaCss3Alt/></i>
                <h3>CSS 3</h3>
            </div>
            <div>
                <i class="fab fa-js-square"><FaJsSquare/></i>
                <h3>JavaScript</h3>
            </div>
            <div>
                <i class="fab fa-react"><FaReact/></i>
                <h3>React</h3>
            </div>
            <div>
                <i class="fa-brands fa-python"><FaPython/></i>
                <h3>Python</h3>
            </div>
            <div>
                <i class="fab fa-git-alt"><FaGitAlt/></i>
                <h3>Git</h3>
            </div>
        </section>
        </div>
    )
}

export { Skills }