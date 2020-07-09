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
            <h2>Material Complementario y Miscelaneos</h2>
            <h3>Semana 1</h3>
            <ul>
                <li><Link to="/setup">Configuración e iniciando con la terminal</Link></li>
                <li><Link to="/python_misc">Cómo escribir buen código Python</Link></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com">
                    StackOverflow (sitio para buscar información sobre programación preguntas/respuestas, etc)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://hackerrank.com">
                    Sitio con ejercicios para practicar python (hay muchos problemas de entrevistas)</a></li>
                <li><Link to="/week1">Ejercicios complementarios semana 1</Link></li>
                <li><Link to="/week1_repaso">Ejercicios Repaso Introducción a Python</Link></li>
            </ul>
            <h3>Semana 2</h3>
            <ul>
                <li><Link to="/week2">Ejercicios complementarios semana 2</Link></li>
            </ul>
            <h3>Semana 3</h3>
            <ul>
                <li><Link to="/week3">Material Complementario semana 3</Link></li>
            </ul>
        </div>
    )
}

export default withLayout(Home);