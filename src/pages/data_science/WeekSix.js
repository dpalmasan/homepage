import React from "react";
import withLayout from "../../components/withLayout";
import MathJax from 'react-mathjax-preview';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function WeekSix() {

  return (
    <div className='container'>
      <h1 className='mt-5'>Probabilidades y Funciones</h1>
      <p className='lead'>
        Esta semana es de probabilidades y funciones. En este material complementario, planeo resumir un poco el contenido del curso
        y hacer un par de fé de erratas a ciertos detalles. El que más me preocupa, es el que vi en el material de la plataforma donde
        para una serie, llaman al método <code>value_counts</code> de la siguiente forma: <code>value_counts('%')</code>. Esto es confuso
        y mala práctica. Lo que retorna son los valores de la serie normalizados por el total de valores. Hay dos cosas relevantes, la primera
        es que los valores retornados <b>NO SON PORCENTAJES</b> (no cumplen la definición matemática de porcentaje). Y la segunda, es que
        el primer argumento por defecto es un <code>booleano</code>, y la razón por la que dicha llamada funciona es porque hace un cast
        al <code>string '%'</code> y este al no ser vacío, queda con el valor <code>True</code>. Esto es engañoso de leer, la forma correcta de llamar
        a una función con parámetros con nombre, es explicitar los parámetros, en este caso: <code>value_counts(normalize=True)</code>. Si leen
        la documentación, el argumento <code>normalize</code> por defecto es <code>False</code>, y lo que hace es dividir cada conteo por el
        total (calculando proporciones respecto del total).</p>


      <h3>Probabilidad</h3>

      <p>En general, se habla de probabilidad en casos en que existe incertidumbre en una situación. Por ejemplo, si voy al doctor y recibo un tratamiento,
      ¿Qué tan probable es que con dicho tratamiento me recupere? O por ejemplo, en un casino jugando black jack, ¿Cuál es la probabilidad de que me salga
      black jack en la siguiente mesa?</p>

      <p>Un <b>modelo probabilístico</b> es una descripción matemática de una situación incierta. Dicho modelo matemático contiene los siguientes
      elementos:</p>

      <MathJax math={
        `<ul>
            <li>El <b>espacio muestral $\\Omega$</b>, que es el conjunto de todos los posibles <b>resultados</b> de un experimento.</li>
            <li>La <b>ley de probabilidad</b>, que asigna a un conjunto $A$ (también llamado <b>evento</b>) de posibiles resultados, un 
              número no negativo $P(A)$ (conocido como la <b>probabilidad</b> de $A$) y que codifica nuestro conocimiento o creencia sobre 
              qué tan posible es que $A$ ocurra.
             </li>
          </ul>
          `} />

      <p>La siguiente figura ilustra los elementos de un modelo probabilístico:</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/modelo_probabilistico.png'} fluid />
        </Col>
      </Row>

      <p>
        <MathJax math={`
        Todo modelo probabilístico involucra un proceso subyacente, el cual se le denomina <b>experimento</b>, y que producirá exactamente 
        uno de los muchos posibles <b>resultados</b>. El conjunto de todos los posibles resultados se llama <b>espacio muestral</b> del experimento, y 
        se denota $\\Omega$. Un subconjunto del espacio muestral, es decir, una colección de posibles resultados, se conoce como <b>evento</b>.`
        } />
      </p>

      <p>
        <MathJax math={`
        La <b>ley de probabilidad</b> especifica la "posibilidad" de cualquier resultado, o cualquier conjunto de posibles resultados (evento). Esta 
        ley asigna a cada evento $A$, un número $P(A)$, llamado la <b>probabilidad</b> de $A$, la cual satisface los siguientes axiomas:
        
        <ol>
          <li><b>(No negatividad)</b> $P(A) \\geq 0$, para todo evento $A$</li>
          <li><b>(Aditividad)</b> Si $A$ y $B$ son dos eventos disjuntos, entonces la probabilidad de su union satisface:

            $$P(A \\cup B) = P(A) + P(B)$$

          Esto se puede generalizar a la union de más eventos.
          </li>
          <li><b>(Normalización)</b> La probabilidad del espacio muestral $\\Omega$ es igual a 1, es decir $P(\\Omega) = 1$</li>
        </ol>
        `
        } />
      </p>

      <p>
        <MathJax math={`
        Consideremos el experimento de lanzar dos dados de 4 caras. Asumimos que los dados no están cargados, y con este supuesto queremos decir 
      que cada uno de los 16 posibles resultados ($\\left\\{ (i, j) \\| i, j = 1, 2, 3, 4\\right\\}$), cada uno tiene la misma probabilidad de 
      ocurrir $\\frac{1}{16}$. Algunos ejemplos:

        <ul>
          <li>$P(\\{ \\text{la suma de los dados es par}\\}) = \\frac{8}{16} = \\frac{1}{2}$</li>
          <li>$P(\\{ \\text{la suma de los dados es impar}\\}) = \\frac{8}{16} = \\frac{1}{2}$</li>
          <li>$P(\\{ \\text{El primer dado es igual al segundo}\\}) = \\frac{4}{16} = \\frac{1}{4}$</li>
          <li>$P(\\{ \\text{El primer dado es mayor que el segundo}\\}) = \\frac{6}{16} = \\frac{3}{8}$</li>
          <li>$P(\\{ \\text{Al menos un dado da 4}\\}) = \\frac{7}{16}$</li>
        </ul>

        El espacio muestral y algunos ejemplos de eventos se muestran en la siguiente figura:
        `
        } />
      </p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/ejemplo_espacio.png'} fluid />
        </Col>
      </Row>

      <h3>Probabilidad Condicional</h3>

      <p>La probabilidad coondicional nos entrega una manera de razonar acerca los resultados de un experimento, basándonos en <b>información parcial</b>.
      Algunos ejemplos de situaciones:</p>

      <ul>
        <li>En un experimento de lanzamiento consecutivo de dos dados, nos dicen que la suma es 9. ¿Qué tan posible es que el primer dado haya sido un 6?</li>
        <li>¿Qué tan probable es que una persona tiene cierta enfermedad dado un test médico que salió negativo?</li>
        <li>Un cliente está usando un la versión gratuita de servicio con cierta frecuencia. ¿Qué tan probable es que acepte una oferta de suscripción
        premium?</li>
      </ul>

      <p>
        <MathJax math={
          `
          Siendo más precisos, dado un experimento, su espacio muestral correspondiente y su ley de probabilidad, supongamos que el resultado se encuentra 
          dentro de algun evento $B$ dado. Deseamos cuantificar la posibilidad que el resultado pertenece también a otro evento $A$. Por lo tanto, construimos 
          una nueva ley de probabilidad que considera el conocimiento disponible: Una ley de probabilidad que para cualquier evento $A$, especifica la 
          <b>probabilidad condicional de $A$ dado $B$</b>, y se denota como $P\\left(A\\mid B\\right)$.
          `
        } />
      </p>

      <p>
        <MathJax math={
          `
          Por otro lado, nos gustaría que las probabilidades condicionales $P\\left(A\\mid B\\right)$ de diferentes eventos $A$, constituyeran una 
          ley de probabilidad que satisfaga todos los axiomas de probabilidad. Este tipo de probabilidades también deben ser consistentes con la intuición 
          en casos especiales, por ejemplo, cuando todos los posibles resultados del experimento son igualmente posibles. Por ejemplo, supongamos que los 
          6 resultados del lanzamiento de un dado de 6 caras son igualmente probables. Si nos dijeran que el resultado fue par, nos quedan sólo 3 posibles 
          resultados, 2, 4, y 6. Estos resultados en principio tenían la misma probabilidad, por lo tanto ahora que sabemos que el número fue par, debiesen 
          ser igualmente probables. Así, es razonable pensar:

          $$P\\left(\\text{el resultado es 6}\\mid \\text{el resultado es par}\\right) = \\frac{1}{3}$$

          Generalizando esta intuición, la definición de probabilidad condicional es:

          $$P\\left(A\\mid B\\right) = \\frac{P(A \\cap B)}{P(B)}$$

          donde asumimos que $P(B) > 0$; la probabilidad condicional es indefinida si el evento condicionante tiene probabilidad cero. 
          `
        } />
      </p>

      <p>
        <MathJax math={
          `
          Dado que $P(A) \\geq 0$ y $P(B) > 0$, esta ley de probabilidad satisface el axioma de no negatividad. El axioma de normalización también 
          se satisface, pues:

          $$P\\left(\\Omega \\mid B\\right) = \\frac{P\\left( \\Omega \\cap B\\right)}{P(B)} = \\frac{P(B)}{P(B)} = 1$$

          Y el axioma de aditivdad también se satisface, para cualquier par de eventos disjuntos $A_1$ y $A_2$:

          $$P\\left(A_1 \\cup A_2 \\mid B\\right) = \\frac{P\\left(\\left(A_1 \\cup A_2 \\right) \\cap B\\right)}{P(B)}$$
          
          $$ = \\frac{P\\left(\\left(A_1 \\cap B \\right) \\cup \\left(A_2\\cap B\\right)\\right)}{P(B)}$$

          $$ = \\frac{P\\left(A_1 \\cap B \\right) + \\left(A_2\\cap B\\right)}{P(B)}$$

          $$ = \\frac{P\\left(A_1 \\cap B \\right)}{P(B)} + \\frac{\\left(A_2\\cap B\\right)}{P(B)}$$

          $$ = P\\left(A_1 \\mid B\\right) + P\\left(A_2 \\mid B\\right)$$
          `
        } />
      </p>

      <p>
        <MathJax math={
          `
          Consideremos nuevamente el experimento de dos lanzamientos de dados de 4 caras, donde los 16 resultados posibles tienen la misma probabilidad.
          Supongamos que queremos determinar la probabilidad $P\\left(A \\mid B\\right)$ donde:

          $$A = \\left\\{max(X, Y) = m\\right\\}, \\quad B = \\left\\{min(X, Y) = 2\\right\\},$$

          y $m$ puede tomar cualquiera de los valores 1, 2, 3, 4.
          `
        } />
      </p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/ejemplo_condicional.png'} fluid />
        </Col>
      </Row>

      <p>
        <MathJax math={
          `
          En la imagen se muestra el espacio muestral de un experimento que involucra dos lanzamientos de dados de 4 caras. El evento 
          condicionante $B = \\left\\{min(X, Y) = 2\\right\\}$ es el conjunto sombreado en la figura. El 
          evento $A = \\left\\{max(X, Y) = m\\right\\}$ comparte con $B$ dos elementos si $m = 3$ o $m = 4$, un elemento si $m = 2$, y ningún 
          elemento si $m = 1$. Por lo tanto tenemos:

          $$
          P (\\left\\{max(X, Y) = m\\right\\} \\mid B)=
            \\left\\{
              \\begin{array}{ll}
                2/5  & \\mbox{si } m = 3 \\text{ o } m = 4 \\\\
                1/5 & \\mbox{si } m = 2 \\\\
                0 & \\mbox{si } m = 1
              \\end{array}
            \\right.$$
          `
        } />
      </p>

      <h3>Distintos enfoques a la estadística</h3>

      <p>
        En el campo de la estadística hay dos prominentes escuelas de pensamiento, con visiones opuestas: la <b>Bayesiana</b> y la <b>clásica</b> (
        también llamada <b>frecuentista</b>). Su diferencia fundamental está relacionada con la naturaleza de modelos desconocidos o variables. En una
        visión Bayesiana, estos modelos se tratan como variables aleatorias (tema que veremos más adelante) con distribuciones conocidas. En la visión
        clásica, estos modelos/variables se tratan como cantidades determinísticas que se desconocen. En fin, es un tema prácticamente filosófico, pero
        en términos prácticos, los modelos Bayesianos solían ser intratables computacionalmente, ahora con los avances en computación y en
        semiconductores (procesadores), muchas investigaciones recientes se enfocan en hacer métodos Bayesianos que puedan ser usados en la práctica. Pueden
        leer este <a href="http://jakevdp.github.io/blog/2014/03/11/frequentism-and-bayesianism-a-practical-intro/" target="_blank" rel="noopener noreferrer">interesante artículo</a>.
      </p>

      <h3>Tips para desafío Jueves</h3>

      <ol>
        <li>Pueden usar la información de la primera semana de éste módulo. Para docstrings
        ver <a href="https://dpalmasan.github.io/homepage/#/python_misc"
            target="_blank"
            rel="noopener noreferrer">
            Intro Python Misc.
        </a></li>
        <li>
          En este caso, recomiendo ver este fragmento de código modificado (fé de erratas al que sale en el enunciado):

        <SyntaxHighlighter language="python" style={docco}>
            {
              'continentes = df["continent"].unique()\n'
              + '\n'
              + '# Es mejor pre-asignar memoria, podemos usar numpy\n'
              + 'promedios = np.zeros(len(continentes))\n'
              + 'desviaciones = np.zeros(len(continentes))\n'
              + '\n'
              + '# Es mejor iterar por nombre de continente, ya que \n'
              + '# no tiene sentido usar memoria gigantezca para almacenar\n'
              + '# una lista de DataFrames e iterar sobre ellos\n'
              + 'for i, continente in enumerate(continentes):\n'
              + '    promedios[i] = df[df["continent"] == continente]["goles_favor"].mean()\n'
              + '    desviaciones[i] = df[df["continent"] == continente]["goles_favor"].std()\n'
              + '    \n'
              + '    \n'
              + 'result = pd.DataFrame({\n'
              + '    "continente": continentes,\n'
              + '    "promedio": promedios,\n'
              + '    "desv": desviaciones\n'
              + '})\n'
              + 'result\n'
            }
          </SyntaxHighlighter>

          Para la función a implementar, pueden tomar como base la siguiente definición (modifiqué la firma):

          <SyntaxHighlighter language="python" style={docco}>
            {
              'def analizar(df, grupo, variable):\n'
              + '    """Analiza un dataframe y retorna promedios y desviaciones.\n'
              + '\n'
              + '    :param df: DataFrame a analizar\n'
              + '    :type df: pd.DataFrame\n'
              + '    :param grupo: Categoría para agrupar (ej. continente)\n'
              + '    :type grupo: string\n'
              + '    :param variable: Columna a analizar\n'
              + '    :type variable: string\n'
              + '    """\n'
              + '    # Remover este pass e implementar función\n'
              + '    pass\n'
            }
          </SyntaxHighlighter>

          Habrá una bonificación de 1 punto si leen la documentación de <code>groupby</code> de <code>pandas</code> e implementan
          el ejercicio de esa forma (<a href="https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.groupby.html" target="_blank" rel="noopener noreferrer">ver documentación</a>)

        </li>
        <li>Para verificar su función, pruebe aplicandola un número grande de veces (ej. <code>1000</code>). Como son dos elementos y
        la función <code>np.random.choice</code> tiene garantías de ser unfiromemente distribuída, la probabilidad debiese ser la
        misma para ambos elementos en el largo plazo (gran cantidad de experimentos), es decir 0.5.</li>
        <li>Para la semilla usar <code>np.random.seed(semilla)</code> donde <code>semilla</code> tiene el valor que quieren utilizar.</li>
      </ol>
    </div>
  )
}

export default withLayout(WeekSix);