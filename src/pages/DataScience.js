import React from "react";
import withLayout from "../components/withLayout";
import { Link } from "react-router-dom";


function module1() {
    return (
        <>
            <h3>Introducción a la Programación con Python</h3>
            <h4>Semana 1: Introducción a la Programación</h4>
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
            <h4>Semana 2: Ciclos y Métodos</h4>
            <ul>
                <li><Link to="/week2">Ejercicios complementarios semana 2</Link></li>
            </ul>
            <h4>Semana 3: Estructuras de Datos</h4>
            <ul>
                <li><Link to="/week3">Material Complementario semana 3</Link></li>
            </ul>
            <h4>Semana 4: API (web)</h4>
            <ul>
                <li><Link to="/week4">Material Complementario semana 4</Link></li>
            </ul>
        </>
    )
}

function module2() {
    return (
        <>
            <h3>Fundamentos Data Science</h3>
            <h4>Semana 5: Estadística univariada y control de flujo</h4>
            <ul>
                <li><Link to="/week5">Material complementario y tips semana 5</Link></li>
            </ul>
            <h4>Semana 6: Probabilidades y funciones</h4>
            <ul>
                <li><Link to="/week6">Material complementario y tips semana 6</Link></li>
            </ul>
            <h4>Semana 7: Variables Aleatorias y Gráficos</h4>
            <ul>
                <li><Link to="/week7">Material complementario y tips semana 7</Link></li>
            </ul>

            <h4>Semana 8: Hipótesis y correlación</h4>
            <ul>
                <li><Link to="/week8">Material complementario y tips semana 8</Link></li>
            </ul>

            <h4>Semana 9: Regresión</h4>
            <ul>
                <li><Link to="/week9">Material complementario y tips semana 9</Link></li>
            </ul>

            <h4>Semana 10: Clasificación</h4>
            <ul>
                <li><Link to="/week10">Material complementario y tips semana 10</Link></li>
            </ul>

            <h4>Semana 11: Dimensionalidad</h4>
            <ul>
                <li><Link to="/week11">Material complementario y tips semana 11</Link></li>
            </ul>
        </>
    )
}


function DataScience() {
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
            {module1()}
            {module2()}
        </div>
    )
}

export default withLayout(DataScience);