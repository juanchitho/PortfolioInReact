import React from 'react';
import './Experience.css'

const Experience = () => {
    return(
        <div>
            <h1 class="textoWhatIdo" id="experience">Experience</h1>
            <section class="experience" >
                <div class="parrafoExperience">
                    <h2>Coordinador de Mesa de Ayuda - Innovacion Pilar (August 2020 - Present)</h2>
                    <p>Actualmente me encuentro administrando el ingreso de solicitudes, sobre problemas informaticos, en el area de Innovacion de la Municipalidad de Pilar</p>
                </div>
                <hr class="solid"/>
                <div class="parrafoExperience">
                    <h2>Tecnico - Olum (July 2020)</h2>
                    <p>Di soporte tecnico a las PC de varios Contact Center, como el de Atencion al Vecino de la Municipalidad de Pilar y los socios de River Plate. A su vez administre el Bot de Whatsapp de Pilar, automatizando sus tareas y la programacion del envio de Bases de datos.</p>
                </div>
        </section>
        </div>
    )
}

export { Experience }