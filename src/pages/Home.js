import React from "react";
import withLayout from "../components/withLayout";


function Home() {
  return (
    <div className='container'>
      <h1 className='mt-5'>Homepage!</h1>
      <p className='lead'>
        Si llegaste a este sitio web, probablemente estés en alguno de los cursos que estoy impartiendo, o buscaste material relacionado (jeje).
        En fin, aquí pondré material que he creado para diferentes cursos que he impartido (sea en universidades, o online).
      </p>
    </div>
  )
}

export default withLayout(Home);