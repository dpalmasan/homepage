import React from "react";
import withLayout from "../components/withLayout";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='container'>
            <h1 className='mt-5'>Material Complementario Desafío LATAM Data Science</h1>
            <p className='lead'>
                Si llegaste a este sitio web, probablemente estés cursando la carrera de Data Science en desafío LATAM (este sitio 
                lo creé para la generación G con fecha <code>11/06/2020</code>). El propósito de este sitio es sólo agregar material
                complementario, algunas recomendaciones para ayudarte a digerir mejor los contenidos del curso. También pueden pedirme
                que agregue información en caso de que lo necesiten.
            </p>
            <h2>Enlaces</h2>
            <ol>
                <Link to="/setup" className="nav-link">Configuración e iniciando con la terminal</Link>
            </ol>
        </div>
    )
}

export default withLayout(Home);