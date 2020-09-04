import React from "react";
import withLayout from "../components/withLayout";


function Home() {
  return (
    <div className='container'>
      <h1 className='mt-5'>Homepage!</h1>
      <p className='lead'>
        Mi sitio web personal. No mucho que decir por acá, quizás agregue algo en el futuro, como apuntes en IA, Ingeniería de Software o comparta
        algún conocimiento de mi experiencia práctica. Por ahora, he subido material complementario para la carrera de Ciencia de Datos
        (<em>Data Science</em>) en unos cursos que estoy impartiendo.
      </p>
    </div>
  )
}

export default withLayout(Home);