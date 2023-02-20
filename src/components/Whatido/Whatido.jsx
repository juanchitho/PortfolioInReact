import React from 'react';
import './Whatido.css'
import { FaPalette } from 'react-icons/fa';
import { CgWebsite} from "react-icons/cg";
import { FaDesktop } from 'react-icons/fa';

const Whatido = () => {
    return(
        <div>
            <h1 class="textoWhatIdo" id="services">What I do?</h1>
        <section class="whatIDo" >
            
            <div class="contenedorServicios">
                            
                <div class="contenderoTextoServicios">
                    <i class="bi bi-brush colorIcono"><FaPalette/></i> 
                    <h2>UI & UX Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet vel reiciendis, perferendis eum nulla necessitatibus neque voluptas temporibus ab nobis nam saepe sit quae rerum.</p>
                </div>
                
                <div class="contenderoTextoServicios">
                    <i class="bi bi-window colorIcono"><CgWebsite/></i>
                    <h2>Website</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet vel reiciendis, perferendis eum nulla necessitatibus neque voluptas temporibus ab nobis nam saepe sit quae rerum.</p>
                </div>
                
                <div class="contenderoTextoServicios">
                    <i class="bi bi-terminal colorIcono"><FaDesktop/></i>
                    <h2>Desktop Application</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet vel reiciendis, perferendis eum nulla necessitatibus neque voluptas temporibus ab nobis nam saepe sit quae rerum.</p>
                </div>
            </div>
        </section>
        </div>
    )
}

export { Whatido }