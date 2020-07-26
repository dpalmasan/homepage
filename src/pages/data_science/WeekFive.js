import React from "react";
import withLayout from "../../components/withLayout";
import MathJax from 'react-mathjax-preview';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


function WeekFive() {

  return (
    <div className='container'>
      <h1 className='mt-5'>Estadística Univariada y Control de Flujo</h1>
      <p className='lead'>
        El módulo anterior, de <em>Introducción a la Programación en Python</em> tuvo como objetivo dar nociones de programación requeridas
        a la hora de trabajar en el mundo tecnológico. Se vieron conceptos como utilizar un IDE (Visual Studio Code), utilizar una terminal,
        variables y tipos en <code>Python</code>, ciclos y métodos, estructuras de datos, complejidad asintótica, una vista rápida a bibliotecas
        utilizadas en ciencia de datos (ej. <code>pandas</code>, <code>numpy</code> y finalmente trabajar con fuentes de datos externas vía
        peticiones HTTP (capítulo API). El objetivo de este módulo es trabajar con la matemática básica (estadística, probabilidad, etc.) requerida
        para resolver problemas con datos. Por ello, de preferencia, nos alejaremos de <code>VSCode</code> y utilizaremos <code>Jupyter</code>.</p>

      <h3>Empezando con Jupyter</h3>

      <p>Para los que tengan instalado <code>Anaconda</code>, probablemente ya tengan instalado este paquete y pueden simplemente iniciar una sesión de jupyter
      desde la <code>UI</code> de <code>Anaconda</code>. Los que no instalaron <code>Anaconda</code>, pueden instalar <code>jupyter</code> ejecutando
      el comando <code>pip install jupyter</code>. Para iniciar jupyter: <code>jupyter notebook</code>, por defecto se iniciará un proceso en
      el puerto <code>8888</code>. Si prefieren utilizar otro puerto, o ya están usando el puerto <code>8888</code>, pueden ejecutar
      el comando <code>jupyter notebook --port=&lt;PUERTO&gt;</code>, por ejemplo, si queremos iniciar el proceso para que use el puerto <code>5000</code> pueden
      ejecutar <code>jupyter notebook --port=5000</code>.</p>

      <p>Una vez estén en su sesión de notebook, se les abrirá el navegador y los redireccionará a la <code>url</code> donde se inició el proceso
      de Jupyter, en caso de que esto no ocurra automáticamente, se puede copiar y pegar el enlace en el navegador. Luego, para crear un notebook seguir
      la siguiente imágen:</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/notebook.png'} fluid />
        </Col>
      </Row>

      <p><b>¿Por qué ahora usamos jupyter notebook, fue <code>VSCode</code> una pérdida de tiempo?</b> La respuesta es no, en general se utiliza
      jupyter notebook en la fase de prototipado de la solución. Por ejemplo, documentar diferentes experimentos, analizar los datos de forma exploratoria
      (estadística descriptiva, visualizaciones), probar diferentes enfoques. Finalmente, cuando se obtiene un modelo, viene la fase de ponerlo en marcha,
      y para ello se requiere volver a escribir <code>scripts</code> o funciones. Ya en esta fase, idealmente usar un IDE, como por ejemplo
      Visual Studio Code.</p>

      <p>Puede usar sintaxis de <code>Markdown</code> para escribir mejores notas en su notebook de jupyter. Por otro lado, jupyter también
      renderiza fórmulas en <code>Latex</code>, lo que puede ser útil a la hora de documentar experimentos, por ejemplo:</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/markdown.png'} fluid />
        </Col>
      </Row>

      <p>Para escribir <code>Markdown</code> debe escoger la opción, en la celda. Para replicar el ejemplo anterior:</p>

      <SyntaxHighlighter language="markdown" style={docco}>
        {
          '## Estadística Descriptiva\n'
          + '\n'
          + 'Para calcular la **media** de un conjunto de datos:\n'
          + '\n'
          + '$$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i$$\n'
        }
      </SyntaxHighlighter>

      <p>Puede leer más sobre <code>Markdown</code> y <code>Latex</code> en los siguientes enlaces:</p>

      <ul>
        <li><a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener noreferrer">Markdown</a></li>
        <li><a href="https://www.latex-project.org/" target="_blank" rel="noopener noreferrer">Latex</a></li>
      </ul>

      <h3>Estadística descriptiva</h3>

      <p>En esta semana del módulo de fundamentos de data science trabajaremos con 3 métricas de estadística descriptiva:</p>

      <ol>
        <li>Media</li>
        <li>Mediana</li>
        <li>Desviación Estándar</li>
      </ol>

      <p>
        <MathJax math={
          `La media de un conjunto de datos discreto es el valor central, específicamente, la suma de los valores dividido por el número de 
          valores.
          $$media = \\frac{1}{n} \\sum_{i=1}^{n} x_i$$
          `} />
      </p>

      <p>
        <MathJax math={
          ` Fé de erratas a la fórmula de la mediana, la forma de calcularla es, ordenar las muestras. Luego, si se tienen $n$ muestras, 
          enúmeradas de $1$ a $n$, es decir $x_1, x_2, \\ldots, x_n$, la mediana se calcula como:
          $$mediana = \\frac{1}{2} \\left( x_{\\lfloor (n+1)/2\\rfloor} + x_{\\lceil (n+1)/2\\rceil} \\right)$$
          `} />
      </p>

      <p>
        <MathJax math={
          ` Supongamos que tenemos las siguientes observaciones de altura $h = (1, 3, 3, 5, 7)$, en este caso la mediana sería $3$, y aplicando 
          la fórmula, se tienen $5$ observaciones, por lo tanto se requiere $0.5 \\cdot (x_{3} + x_{3}) = x_{3} = 3$. Ahora supongamos que tenemos las 
          siguientes observaciones $h = (1, 2, 3, 4, 5, 6, 8, 9)$, en este caso el número de observaciones es $8$, número par. Por lo tanto según 
          la fórmula $0.5 \\cdot (x_{4} + x_{5}) = 0.5 \\cdot (4 + 5) = 4.5$. En el caso par, se consideran las muestras que caen en el medio, y se 
          calcula el punto medio entre ellas. Esto sigue la intuición de la definición de mediana, que es básicamente una medida que separa las 
          observaciones en una mitad inferior y una mitad superior. 
          `} />
      </p>

      <p>
        <MathJax math={
          ` La desviación estándar es una medida de cantidad de dispersión en un conjunto de valores. Un valor bajo de desviación estándar muestra 
          que los valores tienden a estar cerca del promedio, mientras que un valor alto indica que los valores tienden a exparcirse en un rango más 
          amplio de valores. Por ejemplo, consideremos dos distribuciones de valores $(50, 50)$, $(0, 100)$. Ambos tienen una media de 50, pero los 
          rangos de valores en la primera no se alejan del promedio, por lo tanto tienen 0 dispersión, mientras que en el segundo caso, la desviación 
          estándar es 50.

          $$Desv.Std = \\sqrt{\\frac{1}{n} \\sum_{i=1}^{n} \\left( x_i - media \\right)^2}$$
          `} />
      </p>

      <p>A continuación se muestra cómo calcular las estadísticas mencionadas usando python.</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import math\n'
          + 'import numpy as np\n'
          + 'import pandas as pd\n'
          + '\n'
          + '\n'
          + 'def mean(array):\n'
          + '    return sum(array) / len(array)\n'
          + '\n'
          + '\n'
          + 'def std(array):\n'
          + '    avg = mean(array)\n'
          + '    return math.sqrt(sum((xi - avg) ** 2 for xi in array) / (len(array)))\n'
          + '\n'
          + '\n'
          + 'def median(array):\n'
          + '    sorted_array = sorted(array)\n'
          + '\n'
          + '    # Indexacion empieza desde 0, por eso le resto 1\n'
          + '    n = len(array)\n'
          + '    return 0.5 * (\n'
          + '        sorted_array[math.floor((n + 1) / 2) - 1]\n'
          + '        + sorted_array[math.ceil((n + 1) / 2) - 1]\n'
          + '    )\n'
          + '\n'
          + '\n'
          + 'x1 = [1, 3, 3, 5, 7]\n'
          + 'x2 = [1, 2, 3, 4, 5, 6, 8, 9]\n'
          + '\n'
          + 'print("Usando las formulas y operaciones en python")\n'
          + 'print(f"x1; media: {mean(x1)}, mediana: {median(x1)}, desv std: {std(x1)}")\n'
          + 'print(f"x2; media: {mean(x2)}, mediana: {median(x2)}, desv std: {std(x2)}")\n'
          + '\n'
          + 'np_x1 = np.array(x1)\n'
          + 'np_x2 = np.array(x2)\n'
          + '\n'
          + 'print("Usando numpy")\n'
          + 'print(\n'
          + '    f"x1; media: {np.mean(np_x1)}, mediana: {np.median(np_x1)}, desv std: {np.std(np_x1)}"\n'
          + ')\n'
          + 'print(\n'
          + '    f"x2; media: {np.mean(np_x2)}, mediana: {np.median(np_x2)}, desv std: {np.std(np_x2)}"\n'
          + ')\n'
          + '\n'
          + 'df_x1 = pd.DataFrame({"x1": x1})\n'
          + 'df_x2 = pd.DataFrame({"x2": x2})\n'
          + '\n'
          + 'print("Usando pandas")\n'
          + 'print(\n'
          + '    f"x1; media: {df_x1.x1.mean()}, mediana: {df_x1.x1.median()}, desv std: {df_x1.x1.std()}"\n'
          + ')\n'
          + 'print(\n'
          + '    f"x1; media: {df_x2.x2.mean()}, mediana: {df_x2.x2.median()}, desv std: {df_x2.x2.std()}"\n'
          + ')\n'
        }
      </SyntaxHighlighter>

      <p>Como resultado entrega:</p>
      <SyntaxHighlighter language="shell" style={docco}>
        {
          'Usando las formulas y operaciones en python\n'
          + 'x1; media: 3.8, mediana: 3.0, desv std: 2.039607805437114\n'
          + 'x2; media: 4.75, mediana: 4.5, desv std: 2.6339134382131846\n'
          + 'Usando numpy\n'
          + 'x1; media: 3.8, mediana: 3.0, desv std: 2.039607805437114\n'
          + 'x2; media: 4.75, mediana: 4.5, desv std: 2.6339134382131846\n'
          + 'Usando pandas\n'
          + 'x1; media: 3.8, mediana: 3.0, desv std: 2.280350850198276\n'
          + 'x2; media: 4.75, mediana: 4.5, desv std: 2.815771906346718\n'
        }
      </SyntaxHighlighter>

      <h3>Tips Desafíos</h3>
      <h4>Introducción al ambiente de trabajo</h4>

      <p>Para mantener un ambiente ordenado, les recomiendo usar un notebook de jupyter y usar una celda por cada ítem del desafío.</p>

      <ol>
        <li>Fé de erratas, la función print no retorna <code>string</code>, se refiere a imprimir en pantalla.</li>
        <li>Piense en qué tipo de variable es adecuada para almacenar la información.</li>
        <li>Para imprimir las variables, pueden usar <code>f-strings</code>, <code>format</code> o el método de su preferencia.</li>
        <li>Utilizar los mensajes de error que arroja <code>python</code> para investigar la causa y arreglar el error.</li>
        <li>Puede repasar dataframes usando el <Link to="/week3#pandas">material complementario</Link> de la Semana 3.</li>
      </ol>

      <h4>Control de flujo</h4>

      <ol>
        <li>Pueden ver la <a href="https://numpy.org/doc/stable/reference/generated/numpy.linspace.html" rel="noopener noreferrer" target="_blank">documentación</a> de <code>linspace</code>.</li>
        <li>Inconveniente el fraseo, se refiere a mostrar los números pares del primer <code>array</code></li>
        <li>Idealmente cuente cada una de las condiciones. Son cuatro condiciones, puede usar cuatro acumuladores</li>
        <li>Recordar reglas respecto a identificadores para variables</li>
        <li>Probablemente el objetivo de este ejercicio es ver si saben iterar sobre los elementos de la base de datos. Si puede hacerlo sin
        usar ciclos, también lo consideraré bueno.</li>
        <li>Idem al ejercicio 5, si lo puede hacer sin ciclos también se considerará bueno. Como dice el enunciado, idealmente calculen la media
        y la desviación estándar y guarden cada una en una variable.</li>
      </ol>

    </div>
  )
}

export default withLayout(WeekFive);