import React from "react";
import withLayout from "../components/withLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBook } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <div className='container'>
            <h1 className='mt-5'>Un poco sobre mí</h1>
            <p className='lead'>
                Esta sección es por si tienes la duda <em>¿Y este individuo quién es?</em> Dejo un poco de información sobre mí.
            </p>
            <h2 className='mt-5'>Sitios</h2>
            <div className="row">
              <div className="col-sm-6">
              <a href="https://www.linkedin.com/in/dpalmasan/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
              </div>
            </div>
            <div className="row">
            <div className="col-sm-6">
              <a href="https://github.com/dpalmasan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a>
            </div>
            </div>
            <div className="row">
            <div className="col-sm-6">
              <a href="https://trunajod20.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faBook} /> TRUNAJOD (proyecto opensource en python)</a>
            </div>
            </div>
            <h2 className='mt-5'>Experiencia</h2>
            <div className="row">
              <div className="col-sm-6">
                <p>Diciembre 2019 - actualidad</p>
              </div>
              <div className="col-sm-6">
                <p>Ingeniero de Datos en <a href="https://evernote.com/" target="_blank" rel="noopener noreferrer">Evernote</a></p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p>Diciembre 2017 - actualidad</p>
              </div>
              <div className="col-sm-6">
                <p>Ingeniero de I+D en Universidad de Concepción.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p>Junio 2019 - Diciembre 2019</p>
              </div>
              <div className="col-sm-6">
                <p>Científico de datos en Everis</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p>Mayo 2017 - Junio 2019</p>
              </div>
              <div className="col-sm-6">
                <p>Ingeniero de Calidad de Software en <a href="https://www.synopsys.com/" target="_blank" rel="noopener noreferrer">Synopsys</a></p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p> Marzo 2009 - Diciembre 2016</p>
              </div>
              <div className="col-sm-6">
                <p>Alumno ayudante Universidad de Concepción. Para referencias <a href="https://www2.udec.cl/~dipalma/" target="_blank" rel="noopener noreferrer">mi viejo sitio</a></p>
              </div>
            </div>

            <h2 className='mt-5'>Publicaciones</h2>
            <h3 className='mt-5'>Revistas Científicas</h3>
            <div className="row">
              <div className="col-sm-6">
                <p>
                  <a href="https://ieeexplore.ieee.org/abstract/document/8506398" target="_blank" rel="noopener noreferrer">
                  Palma, D., & Atkinson, J. (2018). Coherence-based automatic essay assessment. IEEE Intelligent Systems, 33(5), 26-36.
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <div class="col-sm-6">
                <p>
                  <a href="https://www.researchgate.net/profile/Antonio_Gutierrez_De_Blume/publication/340952008_Improving_Reading_Comprehension_in_Spanish_using_iSTART-E_A_Pilot_Study/links/5ea7117e299bf1125612f51b/Improving-Reading-Comprehension-in-Spanish-using-iSTART-E-A-Pilot-Study.pdf" target="_blank" rel="noopener noreferrer">
                  McCarthy, K. S., Soto, C., de Blume, A. P. G., Palma, D., González, J., & McNamara, D. Improving Reading Comprehension in Spanish using iSTART-E: A Pilot Study.
                  </a>
                </p>
              </div>
            </div>
            <h3 className='mt-5'>Conferencias</h3>
            <div className="row">
              <div className="col-sm-6">
                <p>
                  <a href="https://link.springer.com/chapter/10.1007/978-3-030-25629-6_79" target="_blank" rel="noopener noreferrer">
                  Palma, D., Soto, C., Veliz, M., Riffo, B., & Gutiérrez, A. (2019, August). A Data-Driven Methodology to Assess Text Complexity Based on Syntactic and Semantic Measurements. In International Conference on Human Interaction and Emerging Technologies (pp. 509-515). Springer, Cham.
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p>
                  <a href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/10810/1081005/Fracture-time-predictor-in-mask-data-preparation-using-machine-learning/10.1117/12.2502576.short?SSO=1" target="_blank" rel="noopener noreferrer">
                  Calderón, D., & Palma, D. (2018, October). Fracture time predictor in mask data preparation using machine learning. In Photomask Technology 2018 (Vol. 10810, p. 1081005). International Society for Optics and Photonics.
                  </a>
                </p>
              </div>
            </div>
            <h3 className='mt-5'>Artículos y Opiniones en LinkedIn</h3>
            <div className="row">
              <div className="col-sm-6">
                <p>
                  <a href="https://www.linkedin.com/pulse/inteligencia-artificial-conceptos-b%25C3%25A1sicos-un-poco-de-y-palma-s%25C3%25A1nchez/?trackingId=ofL6W4PmSYSmRUR2zweCKg%3D%3D" target="_blank" rel="noopener noreferrer">
                    Inteligencia Artificial, Conceptos Básicos
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p>
                  <a href="https://www.linkedin.com/pulse/construyendo-mi-propia-nube-cloud-y-montando-un-con-palma-s%25C3%25A1nchez/" target="_blank" rel="noopener noreferrer">
                    Construyendo una "nube" con Raspberry PIs
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p>
                  <a href="https://www.linkedin.com/pulse/mi-primera-contribuci%25C3%25B3n-al-mundo-open-source-python-de-palma-s%25C3%25A1nchez/" target="_blank" rel="noopener noreferrer">
                    Contribución al opensource. Pyhton lib para complejidad de textos
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p>
                  <a href="https://www.linkedin.com/pulse/complejidad-de-textos-dirigida-por-los-datos-para-ser-palma-s%25C3%25A1nchez/" target="_blank" rel="noopener noreferrer">
                    Complejidad de textos dirigida por datos
                  </a>
                </p>
              </div>
            </div>
        </div>
    )
}

export default withLayout(About);