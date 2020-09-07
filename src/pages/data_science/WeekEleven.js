import React from "react";
import withLayout from "../../components/withLayout";
import MathJax from 'react-mathjax-preview';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function WeekEleven() {
  return (
    <div className='container'>
      <h1 className='mt-5'>Dimensionalidad</h1>
      <p className='lead'>
        En este material complementario servirá de complemento para la unidad de <b>dimensionalidad</b>. Se discutirán ciertos tópicos relacionados a
        la dimensionalidad de los datos, y algunos problemas (además de la difícil interpretación) que saltan al tener dimensionalidades elevadas. También
        se discutirán algunos métodos de reducción dimensional que en algunos casos pueden ayudar a resolver parcialmente estos problemas.
      </p>

      <h3>Objetivos</h3>

      <ul>
        <li>Conocer el <b>aprendizaje no supervisado</b> y algunas aplicaciones.</li>
        <li>Entender la dimensionalidad y los problemas que puede ocasionar.</li>
        <li>Conocer métodos de reducción dimensional.</li>
      </ul>
      
      <h3>Aprendizaje no supervisado</h3>

      <p>El término <em>aprendizaje no supervisado</em> hace referencua a métodos que extraen significado de los datos sin tener un modelo entrenado 
      en datos etiquetados (o datos en el cual la variable de respuesta es conocida). Hasta ahora hemos visto dos casos de aprendizaje supervisado: 
      regresión y clasificación. En estos casos, el objetivo es construir un modelo (conjunto de reglas) para predecir una respuesta de interés desde un 
      conjunto de variables predictoras. En el caso de aprendizaje no supervisado, también se construyen modelos de los datos, pero no hay distinción 
      entre una variable de respuesta y las variables predictoras.</p>

      <p>El aprendizaje no supervisado puede tener distintos objetivos. Contrario a lo que dicen los apuntes de la plataforma (acá hago fé de erratas), 
      no es que el aprendizaje no supervisado se categorice en dos tipos de aprendizajes, si no, que la definición general es que intentamos modelar datos 
      sin guiar al modelo (con una variable de respuesta). Sin embargo, los ejemplos que abordaremos en este curso son dos:</p>

      <ol>
        <li>Agrupamiento o <em>clustering</em></li>
        <li>Reducción dimensional</li>
      </ol>

      <p>En el caso de agrupamiento, se puede utilizar para identificar grupos en los datos. Por ejemplo, en una aplicación web (ej. Amazon, Netflix), se 
      puede tener un sistema de recomendación basado en ítems, o en usuarios similares (que pueden ser agrupados en base a ciertas características). En el 
      caso de reducción dimensional, el objetivo puede ser reducir las dimensiones de los datos a un conjunto de variables que sea más manejable. Esta 
      reducción de variables puede ser utilizada como entrada a modelos predictivos de clasificación o regresión, por ejemplo. O por otro lado, queremos 
      encontrar información subyacente (o latente) en los datos, que puede estar aproximada por múltiples predictores. Como ejemplo personal, en el 
      proyecto <code>TRUNAJOD</code> en el cual trabajo, para explicar al usuario variables de la complejidad textual, básicamente se reduce una gran gama 
      de predictores, en 5 predictores globales de complejidad textual, mediante una técnica llamada <em>análisis factorial</em> (que también discutiremos 
      en este curso).</p>

      <h3>Dimensionalidad</h3>

      <p>Los modelos predictivos que hemos visto hasta ahora requieren como entrada un conjunto de datos, que consiste en una variable objetivo y 
      una serie de predictores que idealmente se relacionan con esta variable. Esta serie de predictores, que usualmente son las columnas de nuestro 
      conjunto de datos tabular, pueden ser vistos como vectores matemáticos, en donde cada dimension es un atributo (columna). 
      
      <MathJax math={`
        Podríamos decir, que nuestro conjunto de datos representado por una "tabla" de $M\\times N$, consiste en $M$ observaciones y $N$ atributos. Esta 
        cantodad $N$ de atributos, es lo que se conoce como <b>dimensionalidad</b>. Entonces, en esencia, la <b>dimensionalidad</b> de nuestros datos, 
        dependerá de la cantidad de atributos que consideremos por registro.
      `} />
      </p>

      <p>Es intuitivo pensar que al tener mayor cantidad de atributos (es decir, mayor dimensionalidad), en teoría podríamos tener un mejor modelo, ya 
      que estaríamos entregando mayor cantidad de información al modelo predictivo. Sin embargo, al aumentar la dimensionalidad, pueden surgir ciertos 
      inconvenientes:
      
      <MathJax math={`
        <ul>
          <li>Imaginemos que tenemos $N$ atributos binarios, es decir, tenemos observaciones de la forma $(0, 1, 1, \\ldots, 1)$. Para al menos lograr 
            ver todas las combinaciones posibles, necesitariamos $2^N$ registros. Esto es intuitivo, si nuestro modelo requiere más atributos, tendrá más 
            variabilidad y en consecuencia requerirá mayor cantidad de registros para poder ajustar un modelo robusto.
          </li>
          <li>Se verá más adelante, pero hay modelos cuyo algoritmo de ajuste tiene complejidades asintóticas (recordar módulo de intro a python) que 
            dependen de $M$ y $N$, por lo tanto, se volverán imprácticos de ajustar en algunos casos. En otros casos, y esto es intuitivo, el tiempo de 
            ejecución aumentará (más información que procesar).
          </li>
          <li>Si necesito además tomar alguna decisión respecto al análisis de datos ¿Qué podría concluir de un modelo con cientos de atributos? Idealmente, 
          debiese haber alguna forma de reducir la cantidad de dimensiones para facilitar la interpretación (ya sea eliminando atributos poco relevantes, o 
          combinando atributos que aproximan propiedades latentes o intrínsecas similares.)
          </li>
          <li>Algo no tan intuitivo, algunos algoritmos para ajuste de modelos padecen lo que se conoce como <b>maldición de la dimensionalidad</b>, es decir 
            que a medida que aumenta la dimensionalidad, el rendimiento comienza a deteriorarse (por ejemplo, aumento en la varianza del error esperado).
          </li>
        </ul>
      `} /> 
      </p>

      <p>
      <MathJax math={`
        Existen diferentes manifestaciones de la maldición de la dimensionalidad, por lo que el lector puede investigar sobre ellas en caso de estar 
        interesado en el tema. Supongamos que queremos implementar un algoritmo de clasificación que se base en la similitud de registros para determinar 
        la clase a la que pertenece el registro nuevo (por ejemplo, distancia entre vectores). Supongamos que los datos consisten en puntos distribuídos 
        en un hiper-cubo de dimensión $p$ (ejemplo: En dos dimensiones sería un cuadrado de lado 1, en 3 dimensiones un cubo de lado 1, y ya desde 4 
        dimensiones hacia arriba, no podemos visualizarlo jeje). Consideremos ahora una vecindad hipercúbica de puntos al rededor de un registro objetivo 
        (punto a clasificar), que captura una fracción $r$ de las observaciones:
      `} /> 
      </p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/curse_dim.png'} fluid />
        </Col>
      </Row>

      <p>
      <MathJax math={`
        Si quisieramos calcular el largo de los lados del hipercubo que contiene una fración $r$ del volumen del total de datos, entonces el largo 
        sería $e_p(r) = r^{1/p}$. Consideremos una dimensionalidad de 10 atributos ($p = 10$), entonces $e_{10}(0.01) = 0.63$ y $e_{10}(0.1) = 0.80$, cuando 
        el rango total de cada entrada (valor de cada atributo) es sólo 1 (hipercubo unitario). Esto quiere decir, que para calcular el $1\\%$ o el 
        $10\\%$ de los datos para conformar un promedio local, debemos cubrir el $63\\%$ o el $80\\%$ del rango de cada variable de entrada. Por lo tanto, 
        dichas vecindades, que en dimensionalidades pequeñas eran locales, dejan de ser locales en dimensionalidades altas. Reducir $r$ no ayudaría, pues 
        tendríamos menos observaciones que promediar y por lo tanto la varianza de nuestro ajuste aumentaría.
      `} /> 
      </p>

      <p>Por otro lado, se puede demostrar cómo las métricas de distancia se ven afectadas dependiendo de la cantidad de muestras y de la dimensionalidad. 
      Sin embargo, para no complicar la matemática, sólo obtendremos la intuición de forma experimental. En el siguiente experimento, podemos observar 
      qué pasaría con las métricas de distancia, a medida que aumenta dimensionalidad:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import matplotlib.pyplot as plt\n'
          + 'import numpy as np\n'
          + 'import pandas as pd\n'
          + '\n'
          + 'from scipy.spatial.distance import cdist\n'
          + '\n'
          + '\n'
          + '%matplotlib inline\n'
          + '\n'
          + 'plt.style.use("seaborn")\n'
          + 'plt.rcParams["figure.figsize"] = (6, 3)\n'
          + 'plt.rcParams["figure.dpi"] = 200\n'
          + '\n'
          + '\n'
          + 'def get_avg_max_min_dist_ratio(dataset):\n'
          + '    """Retorna proporcion entre maxima y minima distancia euclideana de un dataset.\n'
          + '\n'
          + '    :param dataset: Conjunto de datos.\n'
          + '    :type dataset: pd.numpy.array\n'
          + '    :return: Promedio proporción de maxima/minima distancia de cada punto\n'
          + '    :rtype: float\n'
          + '    """\n'
          + '    euclidean_dist = cdist(dataset, dataset)\n'
          + '    \n'
          + '    # Encontrar minimos que no sean 0\n'
          + '    min_dist = np.zeros(len(dataset))\n'
          + '    for i, row in enumerate(euclidean_dist):\n'
          + '        min_dist[i] = np.amin(row[row != 0])\n'
          + '    max_dist = np.amax(euclidean_dist, 1)\n'
          + '    return np.mean(max_dist/min_dist)\n'
          + '\n'
          + '# Tamaño de conjunto de datos\n'
          + 'M = 1000\n'
          + 'dimensionalities = (2, 5, 10, 20, 30, 50, 70, 80, 100)\n'
          + 'avg_farthest_distances = np.zeros(len(dimensionalities))\n'
          + '\n'
          + 'for k, N in enumerate(dimensionalities):\n'
          + '    dataset = np.random.normal(0, 10, size=(M, N))\n'
          + '\n'
          + '    # Calcular distancia promedio maxima de puntos respecto a cualquier otro punto\n'
          + '    avg_farthest_distances[k] = get_avg_max_min_dist_ratio(dataset)\n'
          + '    \n'
          + 'plt.plot(dimensionalities, avg_farthest_distances, "o")\n'
          + 'plt.xlabel("Dimensionalidad")\n'
          + 'plt.ylabel(r"$Promedio\\left(\\frac{{MaxDist}}{{MinDist}}\\right)$")\n'
          + 'plt.title("Media de proporción entre distancia máxima y mínima \\nvs Dimensionalidad")\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/dim_dist.png'} fluid />
        </Col>
      </Row>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'print(f"Dimensionalidad 5: {get_avg_max_min_dist_ratio(np.random.normal(0, 10, size=(M, 5)))}")\n'
          + 'print(f"Dimensionalidad 500: {get_avg_max_min_dist_ratio(np.random.normal(0, 10, size=(M, 500)))}")\n'
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          'Dimensionalidad 5: 9.33633957667241\n'
          + 'Dimensionalidad 500: 1.1948297526920728\n'
        }
      </SyntaxHighlighter>

      <p>Podemos observar por ejemplo, que en promedio, la proporción entre la máxima y mínima distancia entre los puntos 
      es <code>9.34</code> para <code>N = 5</code> y <code>1.19</code> para <code>N = 500</code>. Esto quiere decir que en el primer caso, 
      el la distancia máxima puede llegar a ser hasta 10 veces mayor que la distancia mínima para una dimensionalidad pequeña, pero 
      sólo de un <code>19%</code> para una dimensionalidad de 500. Esto quiere decir, que en esencia, la información que nos entrega la 
      distancia entre los puntos es casi nula, lo que podría afectar la varianza en las predicciones aunque el sesgo sea bajo; y por 
      lo tanto, afectar el rendimiento del modelo predictivo</p>


      <h3>Reducción de Dimensionalidad</h3>

      <p>Como hemos visto hasta ahora, tener alta dimensionalidad puede causar algunos problemas:</p>

      <ul>
        <li>Difícil visualización de datos e interpretación (ej. tener demasiadas variables predictoras)</li>
        <li>Maldición de la dimensionalidad, la distancia entre puntos de un espacio tiende a ser insignificante en altas dimensiones.</li>
        <li>Variabilidad y dispersión de datos. Por ejemplo cuando se trabaja con textos y consideramos la frecuencia de diferentes términos como 
        datos, se trabaja con altas dimensionalidades que además, por la naturaleza del problema, tienden a generarse matrices dispersas. En estos casos 
        la reducción dimensional permite reducir la variabilidad en los datos.</li>
        <li>En algunos casos, es costoso computacionalmente en términos de rendimiento y uso de memoria, considerar una elevada cantidad de atributos. Por 
        lo que, la reducción dimensional permite reducir estos problemas.</li>
      </ul>

      <p>Existen diferentes métodos de reducción dimensional, pero en este curso veremos en particular dos: <b>Análisis de Componentes Principales</b>, del 
      inglés PCA <em>Principal Component Analysis</em>, y <b>Análisis Factorial</b> (<em>Factor Analysis</em>). Estos métodos tienen algunos supuestos, que en algunos 
      casos los hacen poco útiles. Por ejemplo para visualización de datos, existen también otros métodos como: Multidimensional Scaling (MDS), T-SNE, Non-Linear 
      PCA, entre otros. Queda como responsabilidad para el lector investigar sobre otros métodos en la práctica, ya que es imposible cubrir todo en un sólo 
      curso de <code>X</code> semanas.</p>

      <p>Para tener una idea previa de los métodos que estudiaremos, en la figura siguiente se muestra la diferencia entre un análisis de 
      componentes principales y un análisis factorial:</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/factor_vs_pca.png'} fluid />
        </Col>
      </Row>

      <p>El enfoque de PCA para reducción dimensional es básicamente crear una o más variables a partir de un conjunto de variables medidas. Lo que 
      hace es en esencia crear una combinación lineal de estas nuevas variables, que idealmente reproducen las variables medidas. El enfoque en el 
      análsisi factorial (utilizado comúnmente en psicometría) es modelar una variable latente/subyacente a partir de un conjunto de mediciones. En 
      simples términos, los factores a obtener están causando las respuestas en las variables medidas (y sus relaciones), es por ello, que en la figura 
      se muestra la flecha en sentido contrario al caso de PCA. El modelo factorial también considera un término de error, que en esencia toma la 
      variabilidad que no puede ser explicada únicamente por el factor. En las siguientes secciones se revisarán en mayor detalle estos métodos.</p>

      <h4>Análisis Factorial</h4>

      <p>Los datos multi-variados usualmente son vistos como mediciones indirectas de propiedades subyacentes que no pueden ser medidas directamente. Algunos 
      ejemplos:</p>

      <ul>
        <li>Pruebas educacionales y psicológicas utilizan cuestionarios, y usan las respuestas a estos cuestionarios para medir variables subyacentes 
        como la inteligencia u otras habilidades mentales de los sujetos.</li>
        <li>Los electroencefalogramas se utilizan para medir actividad neuronal en varias partes del cerebro, mediante mediciones de señales 
        electromagnéticas registradas por sensores ubicados en distintas posiciones de la cabeza del sujeto.</li>
        <li>Los precios del mercado de acciones cambian constantemente a lo largo del tiempo, y reflejan varios factores que no están medidos, tales como 
        confianza en el mercado, influencias externas, y otras fuerzas que pueden ser difíciles de identificar o medir.</li>
        <li>En caso particular del projecto <code>TRUNAJOD</code> (en el cual trabajo), se intenta medir la complejidad del texto a partir de ciertas 
        propiedades extrínsicas de los mismos. ¿Se puede medir complejidad textual directamente?</li>
      </ul>

      <p>El análisis factorial es una técnica estadística clásica cuyo objetivo es identificar esta información latente (subyacente). Los análisis 
      factoriales están típicamente ligados a distribuciones Gaussianas, lo que reduce su utilidad en algunos casos. 

      <MathJax math={`
        En esencia los factores están asociados con múltiples variables observadas, que tienen ciertos patrones similares. Cada factor explica una 
        cantidad particular de la varianza en los datos observados. Esto ayuda en la interpretación de los datos, reduciendo la cantidad de variables:

        $$X_i = \\beta_{i0} + \\beta_{i1} F_1 + \\ldots \\beta_{il}F_l + \\varepsilon_i$$

        Esto lo podemos visualizar como sigue:
      `} /> 
      </p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/factores_ejemplo.png'} fluid />
        </Col>
      </Row>

      <p>Cabe destacar que existen dos tipos de análisis factoriales: Análisis Factorial Exploratorio y Análisis Factorial Confirmatorio. El primero, 
      se enfoca en explorar posibles relaciones, mientras que el segundo se enfoca en confirmarlas (teniendo obviamente una hipótesis de la relación 
      de las variables).</p>

      <p>Por otro lado, al hacer un análisis factorial, se deben tener las siguientes consideraciones:</p>

      <ol>
        <li>No hay outliers en los datos.</li>
        <li>El tamaño de la muestra es mayor que la cantidad de factores a considerar.</li>
        <li>No debe haber multi-colinealidad (una columna sea combinación lineal de otra).</li>
        <li>No existe homocedasticidad entre las variables.</li>
      </ol>

      <p>Siguiendo la línea del material online, análicemos los datos de la encuesta del Centro de Estudios Públicos realizada en Junio del 2003. Parte 
      del conjunto de preguntas está asociado a preguntas sobre el nivel de confianza institucional. Para más información pueden revisar 
      este enlace: <a 
      href="https://www.cepchile.cl/cep/encuestas-cep/encuestas-1998-2008/estudio-nacional-de-opinion-publica-junio-julio-2003" 
      target="_blank" rel="noopener noreferrer">Estudio Nacional de Opinión Pública N°45, Junio-Julio 2003</a>.</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import factor_analyzer as factor\n'
          + 'import missingno as msngo\n'
          + 'import pandas as pd\n'
          + '\n'
          + '\n'
          + 'df = pd.read_csv("semana7/cep45.csv")\n'
          + 'df.head()\n'
        }
      </SyntaxHighlighter>

      <p>Extraeremos los datos de las preguntas (valores 8 y 9 significa que no hay información, ver detalle en el enlace mencionado):</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'trust_df = df.filter(regex="p17_*")\n'
          + 'trust_df = trust_df.rename(\n'
          + '    columns={\n'
          + '        "p17_a": "I.Catolica",\n'
          + '        "p17_b": "I.Evangelica",\n'
          + '        "p17_c": "FFAA",\n'
          + '        "p17_d": "Justicia",\n'
          + '        "p17_e": "Prensa",\n'
          + '        "p17_f": "Television",\n'
          + '        "p17_g":"Sindicatos",\n'
          + '        "p17_h":"Carabineros",\n'
          + '        "p17_i": "Gobierno",\n'
          + '        "p17_j": "PartidosPol",\n'
          + '        "p17_k": "Congreso",\n'
          + '        "p17_l":"Empresas",\n'
          + '        "p17_m":"Universidades", \n'
          + '        "p17_n":"Radio"\n'
          + '})\n'
        }
      </SyntaxHighlighter>

      <p>Podemos explorar la base de datos para visualizar los datos perdidos:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import matplotlib.pyplot as plt\n'
          + 'import numpy as np\n'
          + '\n'
          + '%matplotlib inline\n'
          + '\n'
          + 'plt.style.use("seaborn")\n'
          + 'plt.rcParams["figure.figsize"] = (6, 4)\n'
          + 'plt.rcParams["figure.dpi"] = 200\n'
          + '\n'
          + 'plt.figure(figsize=(4,4))\n'
          + 'msngo.matrix(trust_df.replace([8, 9], [np.nan, np.nan]))\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/missing.png'} fluid />
        </Col>
      </Row>

      <p>Ahora analicemos las medias para cada pregunta:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'trust_df.replace([8, 9], [np.nan, np.nan], inplace=True)\n'
          + 'trust_df.dropna(inplace=True)\n'
          + 'means = trust_df.mean().sort_values()\n'
          + 'plt.plot(means.values, means.index, "bo")'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/means_atributos.png'} fluid />
        </Col>
      </Row>

      <p>Mientras mayor sea el valor, significa que los encuestados confían menos en dicha entidad. Se puede observar por ejemplo que los encuestados 
      confían menos en Partidos Políticos, Sindicatos, Justicia y Congreso.</p>

      <p>Ahora vamos a proceder a hacer un análisis factorial. Sin embargo, antes de realizar este análisis, se debe hacer una prueba de adecuación, que 
      básicamente responde a la pregunta ¿Podemos encontrar factores en nuestro conjunto de datos? Existen dos métodos (quizás más) para verificar la 
      adecuación de la muestra de datos para un análisis factorial:</p>

      <ol>
        <li>Prueba de Bartlett</li>
        <li>Prueba de Kaiser-Meyer-Olkin (desde ahora KMO)</li>
      </ol>

      <p>La prueba de Bartlett es una prueba de hipótesis que verifica si existe correlación entre las variables, y lo que hace es comparar la matriz 
      de correlación de la muestra con una matriz identidad (es decir, que no haya correlación). Si la diferencia no es significativa, entonces no 
      deberíamos aplicar análisis factorial.</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import factor_analyzer as fact\n'
          + '\n'
          + '\n'
          + 'chisq, pvalue = fact.calculate_bartlett_sphericity(trust_df)\n'
          + 'print(f"Chi-Cuadrado: {chisq}, p-value: {pvalue}")\n'
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "Chi-Cuadrado: 2897.0676232781584, p-value: 0.0"
        }
      </SyntaxHighlighter>
      
      <p>En este caso, el <code>p-value</code> es 0, por lo que podemos rechazar la hipótesis de que no hay correlación en los datos.</p>

      <p>La prueba de <b>Kaiser-Meyer-Olkin (KMO)</b> miden la idoneidad de los datos para un análisis factorial. Determina la adecuación para cada 
      variable observada y para el modelo completo. La prueba de KMO estima la proporción de varianza entre todas las variables observadas. Los valores 
      de KMO están entre 0 y 1. Un valor de KMO menor que 0.6 se considera inadecuado:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'kmo_all, kmo_model = fact.calculate_kmo(trust_df)\n'
          + 'print(f"Valor KMO para el modelo: {kmo_model}")'
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          'Valor KMO para el modelo: 0.8299274694302806'
        }
      </SyntaxHighlighter>

      <p>En este caso obtenemos un valor de 0.83, lo que cumple el requisito para que el análisis factorial sea adecuado. Ahora procederemos a 
      realizar el análisis factorial. Para escoger la cantidad de componentes, por lo general se hace un <em>scree plot</em> que básicamente grafica 
      cada uno de los valores propios (básicamente la varianza explicada por cada factor de la varianza total), y se escogen los valores propios que 
      sean mayores que 1:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'factorize = fact.FactorAnalyzer(rotation="varimax")\n'
          + 'factorize.fit(trust_df)\n'
          + 'factor_screeplot = factorize.get_eigenvalues()[0]\n'
          + '\n'
          + 'plt.plot(range(1, len(factor_screeplot) + 1), factor_screeplot, "o-", color="tomato")\n'
          + 'plt.xlabel("Número de Factor")\n'
          + 'plt.ylabel("Valores Propios")\n'
          + 'plt.axhline(1)\n'
          + 'plt.title("Scree plot")\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/scree_plot.png'} fluid />
        </Col>
      </Row>

      <p>De los resultados, podemos observar que podemos escoger 4 factores. Luego podemos ver las cargas de cada factor. Las cargas factoriales 
      son básicamente las relaciones de cada factor con cada variable:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'factorize = fact.FactorAnalyzer(n_factors=4, rotation="varimax")\n'
          + 'factorize.fit(trust_df)\n'
          + 'factor_loadings = pd.DataFrame(\n'
          + '    factorize.loadings_,\n'
          + '    index=trust_df.columns,\n'
          + '    columns=("Factor 1", "Factor 2"))\n'
          + 'factor_loadings'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/factores.png'} fluid />
        </Col>
      </Row>

      <p>La matriz anterior es un poco complicada de interpretar. Por lo general, un criterio de corte para las cargas factoriales, es remover 
      los factores cuya carga factorial sea menor que <code>0.4</code>, haremos eso procesando los datos:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'factor_loadings.where(factor_loadings >= 0.4, "")'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/factores_filtrados.png'} fluid />
        </Col>
      </Row>

      <p>Observamos que el factor 4 fue descartado, debido a que el criterio de corte, consideró que las cargas factoriales no estaban por sobre el 
      umbral. En el resto de los factores, podemos hacer la siguiente interpretación: El factor 1, corresponde a medidas relacionadas a como los 
      encuestados ven al gobierno, y temas relacionados a la política. El factor 2 está relacionado con componentes de justicia, como las 
      fuerzas armadas, justicia y carabineros. El factor 3 está relacionado a la confianza de la gente en los medios de prensa. Y las variables como 
      iglesia Católica, iglesia evangélica, sindicatos, empresas y universidades, no presentan carga significativa en ninguno de los factores. Probablemente 
      por alta cantidad de datos perdidos, entre otras cosas.</p>

      
      <p>Finalmente observamos que los dos factores explican aproximadamente un 39% de la varianza en los datos:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'pd.DataFrame(\n'
          + '    np.vstack(factorize.get_factor_variance()),\n'
          + '    index=("SS Loadings", "Proportion Var", "Cumulative Var"),\n'
          + '    columns=("Factor 1", "Factor 2", "Factor 3", "Factor 4"))\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/factor_stats.png'} fluid />
        </Col>
      </Row>

      <p>Observamos que el cuarto factor tiene un <code>SS loadings</code> bajo. El <code>SS loading</code> es la suma cuadrática de las cargas factoriales. 
      Generalmente se conservan los factores cuya suma cuadrática de cargas sea mayor que 1 (consistente con el criterio de corte, ya que vemos que el 
      factor 4, tiene un valor menor que uno.</p>




      <h4>Análisis de Componentes Principales (PCA)</h4>
    
      <p>
      <MathJax math={`
        Primero, es interesante entender qué significa componentes principales, y cuál es la intuición. En términos simples, las componentes principales 
        serían ejes en donde ocurre la máxima variación en los datos. En términos simples, podrían verse las componentes principales como un cambio de 
        sistema de coordenadas, o un cambio de vectores bases. Por ejemplo, una transformación de un sistema de coordenadas a otro, podría ser como sigue:

        $$  
        x_1 \\begin{bmatrix} a \\\\ c \\end{bmatrix} + x_2 \\begin{bmatrix} b \\\\ d \\end{bmatrix} = 
        \\begin{bmatrix} ax_1 + bx_2 \\\\ cx_1 + dx_2 \\end{bmatrix}
        $$

        En este caso, los vectores en el lado izquierdo son vectores base, como referencia:

        <ul>
          <li>$[a, c]$ ; $[b, d]$ son los vectores base</li>
          <li>En el sistema cartesiano convencional, los vectores base son $[1, 0]$; $[0, 1]$ (o comunmente $x$ e $y$) </li>
        </ul>

        No cualquier vector puede ser un vector base, algunos puntos clave:

        <ul>
          <li>Los vectores base son los mismos para todos los registros de un conjunto de datos.</li>
          <li>Los vectores base son ortonormales, es decir, perpendiculares entre sí y con norma 1 (largo 1)</li>
          <li>Finalmente, podemos representar cada registro del conjunto de datos como una combinación lineal de sus vectores base.</li>
        </ul>
      `} /> 
      </p>

      <p>Lo anterior puede verse abstracto, por lo que tomemos un ejemplo:</p>
      
      <SyntaxHighlighter language="python" style={docco}>
        {
          'def draw_vector(v0, v1, ax=None):\n'
          + '    ax = ax or plt.gca()\n'
          + '    arrowprops=dict(\n'
          + '        arrowstyle="->",\n'
          + '        linewidth=2,\n'
          + '        shrinkA=0, shrinkB=0,\n'
          + '        color="b")\n'
          + '    ax.annotate("", v1, v0, arrowprops=arrowprops)\n'
          + '\n'
          + 'rng = np.random.RandomState(1)\n'
          + 'X = np.dot(rng.rand(2, 2), rng.randn(2, 200)).T\n'
          + 'plt.scatter(X[:, 0], X[:, 1])\n'
          + '\n'
          + '\n'
          + 'pca = pca = PCA(n_components=2)\n'
          + 'pca.fit(X)\n'
          + 'X_pca = pca.transform(X)\n'
          + '\n'
          + '\n'
          + 'plt.plot(X[:, 0], X[:, 1], "ro")\n'
          + 'for length, vector in zip(pca.explained_variance_, pca.components_):\n'
          + '    v = vector * 3 * np.sqrt(length)\n'
          + '    draw_vector(pca.mean_, pca.mean_ + v)\n'
          + '\n'
          + 'plt.title("Ilustración PCA")\n'
          + 'plt.xlabel("$x_1$")\n'
          + 'plt.ylabel("$x_2$")\n'
          + 'plt.axis("equal")\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/pca_ex1.png'} fluid />
        </Col>
      </Row>

      <p>Como se observa en la figura, el conjunto de datos llevarse a otro sistema de coordenadas considerando estos vectores base (para transformar 
      los datos, basta simplemente con aplicar la transformación lineal descrita). Podemos ver también que cada eje se escoge en la dirección donde 
      haya mayor variabilidad en los datos (varianza).</p>

      <p>Un ejemplo de aplicación de las compnentes principales, es en el caso de reducción dimensional. Por ejemplo, podemos eliminar las componentes con 
      menor cantidad de varianza, es decir, que explican menos la variabilidad en los datos, y en consecuencia, estaríamos proyectando el espacio dimensional 
      en un espacio de menos dimensiones. Para ilustrar esto, consideremos el siguiente ejemplo:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'from mpl_toolkits.mplot3d import Axes3D\n'
          + '\n'
          + '\n'
          + 'plt.rcParams["figure.figsize"] = (10, 10)\n'
          + '\n'
          + 'EJEMPLO_PCA_URL = (\n'
          + '    "https://gist.githubusercontent.com/dpalmasan/"\n'
          + '    "1bba35979f1f284ddf7c8c540f60c66f/raw/"\n'
          + '    "4a3fcf2f97fa2d85be69eedaa98b0ed6f46a3017/tetra.csv"\n'
          + ')\n'
          + 'df = pd.read_csv(EJEMPLO_PCA_URL)\n'
          + '\n'
          + 'pca = pca = PCA(n_components=2)\n'
          + 'pca.fit(df)\n'
          + 'X_pca = pca.transform(df)\n'
          + '\n'
          + 'fig = plt.figure()\n'
          + 'ax = fig.add_subplot(211, projection="3d")\n'
          + 'ax.scatter(df["x"], df["y"], df["z"], c="b", marker="o")\n'
          + 'ax.set_xlabel("X")\n'
          + 'ax.set_ylabel("Y")\n'
          + 'ax.set_zlabel("Z")\n'
          + 'ax.set_title("Tetera en 3D")\n'
          + 'ax = fig.add_subplot(212)\n'
          + 'ax.plot(X_pca[:, 0], X_pca[:, 1], "ro")\n'
          + 'ax.set_xlabel("PC 1")\n'
          + 'ax.set_ylabel("PC 2")\n'
          + 'ax.set_title("Proyección en 2D de la tetera (sombra)")'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/intuicion_pca.png'} fluid />
        </Col>
      </Row>

      <p>En el ejemplo de la tetera, básicamente tenemos un espacio dimensional de 3 dimensiones (<code>x, y, z</code>). Cuando aplicamos <code>PCA</code> y 
      eliminamos una componente (la de menos variación), básicamente estamos calculando una proyección de este espacio a un espacio de menor dimensión, intentando 
      mantener la variabilidad del espacio original. Intuitivamente, en este caso particular, podría pensarse en cada componente principal como visualizar 
      la "sombra" de la tetera. Claro, que no estamos restringidos sólo a espacios de 3 dimensiones, si no que también podemos reducir espacios de cualquier 
      dimension a uno de menor dimensionalidad, por ejemplo, para visualizar datos. Tomemos de ejemplo la <b>prueba</b> de este curso, podemos visualizar 
      si es que existe diferencia entre los registros de interés:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'from sklearn.decomposition import PCA\n'
          + 'from sklearn.preprocessing import StandardScaler\n'
          + '\n'
          + '\n'
          + 'df = pd.read_csv("prueba/income-db.csv")\n'
          + 'scaler = StandardScaler()\n'
          + '\n'
          + 'X = df.select_dtypes(exclude=["object"])\n'
          + 'X = scaler.fit_transform(X)\n'
          + 'pca = pca = PCA(n_components=2)\n'
          + 'pca.fit(X)\n'
          + '\n'
          + '# Transformar a dos dimensiones\n'
          + 'X = pca.transform(X)\n'
          + '\n'
          + 'income_greater = df["income"] == ">50K"\n'
          + 'income_leq = df["income"] == "<=50K"\n'
          + 'plt.plot(X[income_greater, 0], X[income_greater, 1], "ro", alpha=0.7)\n'
          + 'plt.plot(X[income_leq, 0], X[income_leq, 1], "bo", alpha=0.7)\n'
          + 'plt.legend(("income > 50K", "income <= 50K"))\n'
          + 'plt.xlabel("componente principal 1")\n'
          + 'plt.ylabel("Componente principal 2")\n'
          + 'plt.title("Proyección datos numéricos con PCA")\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/prueba_ejemplo.png'} fluid />
        </Col>
      </Row>

      <p>Además, podemos ver cómo impacta cada variable a cada nueva dimensión:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          '# El signo no importa, importa el signo relativo, podemos ver\n'
          + '# Cómo afecta cada componente a cada variable por ejemplo\n'
          + 'pd.DataFrame(\n'
          + '    pca.components_,\n'
          + '    columns=df.select_dtypes(exclude=["object"]).columns,\n'
          + '    index = ["PC-1", "PC-2"])\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/pca_corr.png'} fluid />
        </Col>
      </Row>

      <p>Debe considerarse también, que usualmente se estandarizan los datos antes de aplicar PCA (por ejemplo normalizar, o llevar a una misma escala), por 
      lo tanto, cuando lo apliquen, hagan este pre-procesamiento antes. Finalmente, y recapitulando hasta ahora, PCA es un maximizador de varianza, que 
      proyecta los datos originales en las direcciones donde la varianza es máxima.</p>







    </div>
  )
}

export default withLayout(WeekEleven);