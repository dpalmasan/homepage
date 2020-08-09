import React from "react";
import withLayout from "../../components/withLayout";
import MathJax from 'react-mathjax-preview';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function WeekSeven() {

  return (
    <div className='container'>
      <h1 className='mt-5'>Variables Aleatorias y Gráficos</h1>
      <p className='lead'>
        En este material complementario, se darán algunas nociones básicas de variables aleatorias discretas y continuas. También se verán
        ejemplos de gráficos típicos utilizados en análisis exploratorio de datos, tales como histogramas, dotplots, gráficos de barra, entre otros.
        Cabe destacar que en general teoría de probabilidad da para un curso completo, y por lo tanto, sólo se entregnan nociones fundamentales. El
        lector puede profundizar en algunos temas en caso de que quiera saber más (ej. Yo recomendaría leer sobre valor esperado y varianza de
        una variable aleatoria).
      </p>


      <h3>Variables Aleatorias</h3>

      <p>Dado un experimento y su correspondiente conjunto de resultados posibles (espacio muestral), una variable aleatoria
      asoocia un número particular a cada resultado, el cual llamamos <b>valor</b> de la variable aleatoria.
      Matemáticamente, <b>una variable aleatoria es una función que mapea el resultado de un experimento a un valor real</b>.</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/discrete_random_variable.png'} fluid />
        </Col>
      </Row>

      <p>
        <MathJax math={`
        En la figura se muestra un ejemplo de variable aleatoria. Por ejemplo si se tiene el experimento de lanzar dos dados de 4 caras, 
      donde los lanzamientos los representamos como los pares $(x, y)$, entonces se podría definir como variable aleatoria $X = max(x, y)$, por 
      ejemplo en el caso en que el resultado del experimento sea $(4, 1)$, entonces la variable $X$ tomaría el valor 4.`
        } />
      </p>

      <p>Otro ejemplo, en un experimento que involucre una secuencia de 5 lanzamientos de una moneda, el número de caras en la secuencia podría
      ser una variable aleatoria. La secuencia en sí (ej. <code>HHTHT</code>) no es una variable aleatoria, ya que no tiene un valor numérico explícito.</p>

      <h4>Conceptos principales relacionados a Variables Aleatorias</h4>

      <p>Considerando un modelo probabilístico de un experimento:</p>
      <ul>
        <li>Una <b>variable aleatoria</b> es una función con valores reales de los resultados de un experimento.</li>
        <li>Una <b>función de una variable aleatoria</b> define otra variable aleatoria.</li>
        <li>Podemos asociar a cada variable aleatoria ciertas "tendencias" de interés, por ejemplo el <b>promedio</b> y la <b>varianza</b>.</li>
        <li>Una variable aleatoria puede estar <b>condicionada</b> por un evento o por otra variable aleatoria.</li>
        <li>Existe una noción de <b>independencia</b> de una variable aleatoria con respecto a un evento u otra variable aleatoria.</li>
      </ul>

      <p>Una variable aleatoria, se dice que es <b>discreta</b>, si su rango (el conjunto de valores que puede tomar) es finito o
      infinito contable (por ejemplo, los números naturales son contables, pues puedo enumerarlos, sin embargo los números realos no porque
      ¿qué número viene después del 0?). En los ejemplos anteriores, los valores que pueden tomar las variables definidas son limitados:
      en el caso de la secuencia de 5 lanzamientos de moneda, la variable cantidad de caras, puede tomar los valores <code>0, 1, 2, 3, 4, 5</code>. En
      el caso del lanzamiento de los dos dados y la variable <code>max(x, y)</code>, esta puede tomar los valores <code>1, 2, 3, 4</code>.</p>

      <p>
        <MathJax math={`
        La forma más importante de caracterizar una variable aleatoria, es a través de las probabilidades de los valores que puede tomar. Para una 
        variable discreta $X$, estos valores se capturan con la <b>función masa de probabilidad</b> de $X$, denotada como $p_X$. En particular, si $x$ es 
        un número real, la probabilidad de masa de $x$, denotada como $p_X(x)$, es la probabilidad del evento $\\left\\{X = x\\right\\}$ que consiste 
        en todos los resultados llevan a la variable $X$ tomar el valor $x$
        
        $$p_X(x) = P\\left(\\left\\{X = x\\right\\}\\right)$$
        `
        } />
      </p>

      <p>
        <MathJax math={`
          Consideremos el ejemplo de lanzar dos monedas, y consideremos $X$ como la cantidad de caras obtenidas. Observamos que la variable puede 
          tomar los valores $0, 1, 2$, luego la distribución de masa de probabilidad de $X$ es:

          $$
          p_X(x)=
            \\left\\{
              \\begin{array}{ll}
                1/4  & \\mbox{si } x = 0 \\text{ o } x = 2 \\\\
                1/2 & \\mbox{si } x = 1 \\\\
                0 & \\mbox{en cualquier otro caso }
              \\end{array}
            \\right.$$

          Como ejercicio para el lector, pueden calcular la función de masa de probabilidad para el experimento del lanzamiento de dos dados con 
          $X = max(x, y)$.

          Se debe notar que se cumple:

          $$\\sum_{x} p_X(x) = 1$$

          Donde en la suma anterior, $x$ puede tomar todos los posibles valores de $X$. Esto es una consecuencia de los axiomas de aditividad y 
          normalización.
        `
        } />
      </p>

      <p>
        <MathJax math={`
          Un ejemplo importante de variable aleatoria, es la <b>variable aleatoria de Bernoulli</b>. Esta variable considera el lanzamiento 
          de una moneda, cuya probabilidad de cara es $p$, y cruz $1 - p$. Esta variable toma dos valores, 1 o 0, dependiendo del resultado 
          del lanzamiento. La distribución de probabilidad de masa es:

          $$
          p_X(x)=
            \\left\\{
              \\begin{array}{ll}
                p  & \\mbox{si } x = 1 \\\\
                1 - p & \\mbox{si } x = 0 \\\\
              \\end{array}
            \\right.$$

          Pese a su simplicidad, la variable de Bernoulli es muy importante. En la práctica, se utiliza para modelar situaciones probabilísticas 
          con dos posibles resultados, por ejemplo:

          <ul>
            <li>Cliente compra o no compra producto o servicio.</li>
            <li>El estado de un teléfono en un tiempo dado es disponible u ocupado.</li>
            <li>La preferencia de una persona puede ser a favor o en contra de un candidato político.</li>
          </ul>

          Otros ejemplos de variables aleatorias típicas usadas son: Binomial, Geométrica y de Poisson.
        `
        } />
      </p>

      <h4>Esperanza y varianza de una variable aleatoria</h4>
      <p>
        <MathJax math={`
          Usualmente es deseable, resumir la información de una variable aleatoria en una sola magnitud, en lugar de varios números asociados 
          a las probabilidades de los valores posibles de la variable. Esto se logra mediante la <b>esperanza</b> de $X$, que es un promedio 
          ponderado (a través de probabilidades) de los posibles valores de $X$.

          $$E[X] = \\sum_x {xp_X(x)} $$

          Una intuición de esta medida es pensar en la esperanza de una variable aleatoria como el centro de gravedad o centro de masa de 
          la función de probabilidad de masa.

          Otra medida importante asociada a una variable aleatoria $X$ es la <b>varianza</b> de $X$, que se define como la esperanza de la
          variable aleatoria $(X - E[X])^2$, es decir:

          $$var(X) = E\\left[(X - E[X])^2\\right]$$

          La interpretación es la misma que vimos en la semana 1, a diferencia que ahora conocemos el modelo probabilístico de la variable 
          aleatoria.
        `
        } />
      </p>

      <p>
        Es bastante común que existan variables aleatorias con un rango continuo de posibles valores, algunos ejemplos: velocidad de un vehículo
        en una carretera, estatura de un grupo de interés, etc. Además, las variables continuas permiten usar un conjunto de herramientas de
        cálculo que usualmente permiten análisis que no son posibles de realizar en un modelo discreto. Finalmente, todos los conceptos y métodos
        vistos sobre variables aleatorias discretas tienen una contraparte continua.
      </p>


      <p>
        <MathJax math={`
          Una variable $X$ se dice que es <b>continua</b> si existe una función no negativa $f_X$, llamada <b>función de densidad de probabilidad</b> de 
          $X$, tal que:

          $$P(X \\in B) = \\int_B {f_X(x)dx}$$

          y que puede ser interpretada como el área bajo la curva del gráfico de la función de densidad de probabilidad. Por otro lado, la función 
          $f_X(x) \\geq 0$ para todo $x$ y $\\int_{-\\infty}^{\\infty} {f_X(x)dx} = 1$ (axioma de normalización). También se pueden definir las medidas 
          de esperanza y varianza en una variable continua $X$:

          $$E[X] = \\int_{-\\infty}^{\\infty} {xf_X(x)dx}$$

          $$var(X) = E\\left[(X - E[X])^2\\right] = \\int_{-\\infty}^{\\infty} {\\left(x - E[x]\\right)^2f_X(x)dx}$$
        `
        } />
      </p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/variable_continua.png'} fluid />
        </Col>
      </Row>

      <p><b>Observación:</b> No es necesario saberse de memoria las fórmulas o saber resolver integrales, etc. Lo importante es tener
      la intuición de qué significa una variable aleatoria continua y su función de densidad de probabilidad. En particular, es importante entender
      que el área bajo la curva de esta función debe ser 1 (axioma de normalización), y que una porción de esa área, representa la probabilidad
      de que un determinado evento ocurra. Por ejemplo, si se modela la estatura, como una variable aleatoria continua, no tendría sentido
      intentar calcular la probabilidad de que una persona tenga estatura <code>1.653...</code> (sería 0), lo que interesa es cuál es la probabilidad
      de encontrar personas entre un determinado rango de estaturas, y en este segundo caso, la noción de área bajo la curva sirve para tener una
      idea más clara del problema.</p>

      <p>
        <MathJax math={`
          Un ejemplo bastante usado de variable aleatoria continua son las variables aleatorias normales. Una variable aleatoria $X$ se dice que 
          es <b>normal</b> o <b>Gaussiana</b> si tiene una función de densidad de probabilidad de la forma:

          $$f_X(x) = \\frac{1}{\\sqrt{2 \\pi \\sigma}} e^{-(x - \\mu)^2/2\\sigma^2}$$

          La esperanza y la varianza de X se pueden calcular, encontrándose que: $E[X] = \\mu$ y $var(X) = \\sigma^2$. En general, se dice que la 
          distribución normal está parametrizada por $\\mu$ y por $\\sigma^2$. Un caso particular de la variable aleatoria normal es la variable aleatoria 
          normal estandarizada, en el que $\\mu = 0$ y $var(X) = 1$. Este tipo de variable se usa frecuente mente en procesamiento de señales, u en otros 
          fenómenos donde se quiere modelar el ruido de una señal.
        `
        } />
      </p>

      <h3>Visualización de variables (Gráficos con python)</h3>

      <h4>Histogramas</h4>

      <p>Un histograma nos entrega una interpretación visual de datos numéricos, indicando el número de observaciones que poseen valores en
      un determinado rango. Estos rangos de valores se conocen como clases o bins. La frecuencia de datos que caen en cada bin se ilustra mediante
      una barra vertical. Mientras más alta sea la barra, mayor es la cantidad de datos de un bin. Una aplicación bastante usada es determinar si
      una variable "se parece" o puede aproximarse a una variable normal, para ello lo que se hace es normalizar el histograma (axioma de normalización)
      dividiendo por <code>total_obs*ancho_bin</code>. A continuación se muestran algunos ejemplos.</p>

      <p>Primero cargamos el conjunto de datos (disponible en la plataforma)</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import pandas as pd\n'
          + '\n'
          + '\n'
          + 'df = pd.read_csv("qog_std_cs_jan18.csv")\n'
          + 'df.head()\n'
        }
      </SyntaxHighlighter>

      <p>Graficamos histograma, hay varias formas de hacerlo, por ahora lo haremos con la biblioteca <code>seaborn</code>:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          '%matplotlib inline\n'
          + '\n'
          + 'import seaborn as sns\n'
          + '\n'
          + '# United nations development program (Human development index)\n'
          + 'undp_hdi_notna = df["undp_hdi"].dropna()\n'
          + '\n'
          + 'sns.distplot(undp_hdi_notna, bins=20, kde=False)\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/hist.png'} fluid />
        </Col>
      </Row>

      <p>Veamos qué tanto se acerca la distribución de los datos a una distribución normal. Para ello normalizamos el histograma, y graficamos la
      función de densidad de probabilidad de una variable aleatoria normal. Podemos usar como aproximación el promedio y la desviación estándar
      de la muestra. La función de densidad de probabilidad normal viene implementada en la biblioteca <code>scipy</code>.</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'from scipy.stats import norm\n'
          + 'import numpy as np\n'
          + 'import matplotlib.pyplot as plt\n'
          + '\n'
          + 'x = np.linspace(0, 1.4, 100)\n'
          + '\n'
          + 'sns.distplot(undp_hdi_notna, bins=20, kde=False, norm_hist=True)\n'
          + '\n'
          + '# Graficar histograma normalizado (como función de densidad de probabilidad)\n'
          + '# Se normaliza para cumplir el axioma de normalización, esto se logra \n'
          + '# Dividiendo el conteo de cada bin por la cantidad de muestras*largo_bin\n'
          + 'plt.plot(x, norm.pdf(x, undp_hdi_notna.mean(), undp_hdi_notna.std()), "r")\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/hist_dist.png'} fluid />
        </Col>
      </Row>

      <p>Es interesante también explorar un poco más la variable aleatoria normal. Veamos qué ocurre al variar los parámetros de la media
      y la desviación estándar. También grafiquemos la función acumulada de densidad (que en el infinito debe ser igual a 1, ya que es el área bajo
      la curva de la función de densidad de probabilidad):</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'x = np.linspace(-10, 10, num=500)\n'
          + '\n'
          + '# Gráficos\n'
          + 'fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 7))\n'
          + 'fig.suptitle(r"Distribuciones normales para distintos valores de $\\mu$ y $\\sigma$")\n'
          + 'ax1.plot(x, norm.pdf(x, 0, 1), "r")\n'
          + 'ax1.plot(x, norm.pdf(x, -1, 2), "g")\n'
          + 'ax1.plot(x, norm.pdf(x, 2, 5), "b")\n'
          + 'ax1.legend((r"$\\mu = 0, \\sigma = 1$", r"$\\mu = -1, \\sigma = 2$", r"$\\mu = 2, \\sigma = 5$"))\n'
          + 'ax2.plot(x, norm.cdf(x, 0, 1), "r")\n'
          + 'ax2.plot(x, norm.cdf(x, -1, 2), "g")\n'
          + 'ax2.plot(x, norm.cdf(x, 2, 4), "b")\n'
          + 'ax2.legend((r"$\\mu = 0, \\sigma = 1$", r"$\\mu = -1, \\sigma = 2$", r"$\\mu = 2, \\sigma = 5$"))\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/pdf_cdf.png'} fluid />
        </Col>
      </Row>

      <p>En el material de la plataforma también se ven otros tipos de gráficos útiles, como el de barra, o el gráfico de torta.</p>


      <h3>Teoremas de Límites</h3>

      <p>
        <MathJax math={`
          No iremos con la matemática dura de esto, sólo con la intuición, pero notando que de todas formas, una vez digerida la intuición es bueno 
          intentar entender la matemática detrás de los teoremas. Supongamos que tenemos una secuencia $X_1, X_2, \\ldots$ de variables aleatorias independientes e 
          idénticamente distribuidas (i.i.d) con promedio $\\mu$ y varianza $\\sigma^2$. Consideremos la variable $S_n$:

          $$S_n = X_1 + X_2 + \\ldots + X_n$$

          como la suma de las primeras $n$ variables. Los teoremas de límites se enfocan en establecer propiedades para $S_n$ y variables aleatorias 
          relacionadas a medida que $n$ aumenta. Como establecimos que las variables eran independientes, se tiene:

          $$var(S_n) = var(X_1) + var(X_2) + \\ldots + var(X_n) = n\\sigma^2$$

          Por lo tanto, la dispersión de la distribución $S_n$ aumenta a medida que $n$ aumenta, y no puede tener un límite que signifique algo. Por otro 
          lado, la situación es diferente si consideramos el $promedio de la muestra$:

          $$M_n = \\frac{X_1 + \\ldots + X_n}{n} = \\frac{S_n}{n}$$

          Si calculamos las propiedades de $M_n$, llegamos a:

          $$E[M_n] = \\mu, \\quad var(M_n) = \\frac{\\sigma^2}{n}$$

          En particular, la varianza de $M_n$ tiende a 0 a medida que $n$ aumenta, y la esperanza de la distribución de $M_n$ debe ser muy cercana 
          al promedio \\mu. Estos hechos, nos entregan una intuición para la interpretación de que la esperanza $E[X] = \\mu$ es equivalente al promedio 
          de una larga cantidad de muestras independientes sacadas de la distribución de $X$.

          Por otro lado, también podemos considerar una cantidad que es un punto medio entre $M_n$ y $S_n$. Podemos restar $n\\mu$ de $S_n$, para 
          obtener una variable aleatoria con promedio 0 ($S_n - n\\mu$) y dividir por $\\sigma\\sqrt{n}$, para formar la siguiente variable aleatoria:

          $$Z_n = \\frac{S_n - n\\mu}{\\sigma\\sqrt{n}}$$

          Puede observarse que: 
          $$E[Z_n] = 0, \\quad var(Z_n) = 1$$

          Ya que la varianza y la esperanza de $Z_n$ se mantienen constantes a medida que $n$ aumenta, la distribución de $Z_n$ no se agranda ni se 
          achica. El <b>teorema del límite central</b> está relacionado con la forma asintótica de la distribución de $Z_n$ y asegura que dicha 
          distribución se convierte en la distribución norma estándar. 
        `
        } />
      </p>

      <p>Para probar empíricamente las intuiciones entregadas hasta ahora, podemos usar el mismo conjunto de datos de la semana. En este ejemplo exploraremos
      la columna <code>gle_cgdpc</code> (PIB per cápita):</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          '%matplotlib inline\n'
          + '\n'
          + 'import matplotlib.pyplot as plt\n'
          + 'import numpy as np\n'
          + 'import pandas as pd\n'
          + '\n'
          + '\n'
          + 'from scipy.stats import norm\n'
          + '\n'
          + '\n'
          + 'df = pd.read_csv("semana3/apoyo/qog_std_cs_jan18.csv")\n'
          + '\n'
          + '# Calcular valores "verdaderos" de promedio y desv estándar\n'
          + 'true_mean = df["gle_cgdpc"].mean()\n'
          + 'true_std = df["gle_cgdpc"].std()\n'
          + '\n'
          + '# Probar distintos tamaños de muestra\n'
          + 'sample_size = [3, 5, 10, 50]\n'
          + '\n'
          + 'fig, ax = plt.subplots(4, 1, figsize=(15, 20))\n'
          + 'fig.suptitle(f"Distribución de media de muestras $\\mu = {true_mean}$ y $\\sigma = {true_std}$")\n'
          + '\n'
          + 'experiments = 1000\n'
          + 'for k, N in enumerate(sample_size):\n'
          + '    sample_means = np.zeros(experiments)\n'
          + '    for i in range(experiments):\n'
          + '        sample_means[i] = df.sample(N)["gle_cgdpc"].mean()\n'
          + '    \n'
          + '    ax[k].hist(sample_means, density=True)\n'
          + '    x = np.linspace(np.min(sample_means), np.max(sample_means), num=1000)\n'
          + '    ax[k].plot(x, norm.pdf(x, true_mean, true_std/np.sqrt(N)), "r")\n'
          + '    ax[k].axvline(x=true_mean, color="black", ls="--")\n'
          + '    ax[k].set_title(f"$\\overline{{x}} = {np.mean(sample_means)}$ $\\sigma_{{x}} = {np.std(sample_means)}$")\n'
        }
      </SyntaxHighlighter>

      <p>Como resultado deberían ver:</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/intuicion.png'} fluid />
        </Col>
      </Row>

      <p>Básicamente lo que debe observarse, es que a medida que la cantidad de muestras aumenta, el promedio de la distribución comienza a
      tender al promedio verdadero, y por otro lado, la varianza, disminuye en proporción al tamaño de la muestra.</p>


      <h3>Tips Desafíos de la semana</h3>

      <h4>Desafío Martes</h4>

      <ol>
        <li>Para extraer una muestra aleatoria, pueden usar el método <code>sample</code> de los dataframe de pandas.</li>
        <li>Pueden usar <code>describe</code> para las estadísticas descriptivas.</li>
        <li>Pueden usar <code>isnull</code></li>
        <li>Hay varias formas de hacer este ejercicio, pero en todas deben combinar uso de bibliotecas para gráficos.</li>
        <li>El uso del término "dotplot" está mal empleado. Deben hacer un gráfico como el que sale en las lecturas (usando simplemente plot)</li>
        <li>El enunciado dice exactamente lo que hay que hacer.</li>
      </ol>

      <h4>Desafío Jueves</h4>

      <p>Aquí parcialmente estoy dando algunas respuestas del desafío del martes. La razón, es para que aprovechen el tiempo de este desafío, y puedan
      trabajar, independiente de si terminaron o no el desafío anterior. Además es más fácil de revisar y de homogeneizar el desarrollo de este desafío
      en particular.</p>

      <ol>
        <li>Copie el siguiente snippet de código, y úselo en la primera celda de su notebook.</li>
        <SyntaxHighlighter language="python" style={docco}>
          {
            'import pandas as pd\n'
            + 'import numpy as np\n'
            + '\n'
            + '\n'
            + 'DATAFRAME_URL = (\n'
            + '    "https://gist.githubusercontent.com/dpalmasan/"\n'
            + '    "a42379e5aec575a5fc7a006d60355f97/raw/44295ef3"\n'
            + '    "a93ed2d9f639291bcdd7c7e17aca6fc5/dataframe_desafio_jueves.csv")\n'
            + 'df = pd.read_csv(DATAFRAME_URL, index_col=0)\n'
            + 'df.head()\n'
          }
        </SyntaxHighlighter>
        <li>Utilice este snippet de código:</li>
        <SyntaxHighlighter language="python" style={docco}>
          {
            '%matplotlib inline\n'
            + '\n'
            + 'import matplotlib.pyplot as plt\n'
            + '\n'
            + 'from collections import namedtuple\n'
            + '\n'
            + '\n'
            + '# Auxiliar, usada por la función plot_by_cat\n'
            + 'Stats = namedtuple("Stats", ["mean", "median", "std"])\n'
            + '\n'
            + '\n'
            + 'def missing_data_stats(df, var, print_list=False):\n'
            + '    """Calcula estadísticas de datos perdidos.\n'
            + '\n'
            + '    :param df: Dataframe a analizar\n'
            + '    :type df: pd.DataFrame\n'
            + '    :param var: Columna de interés\n'
            + '    :type var: str\n'
            + '    :param print_list: Indica si mostrar filas con datos perdidos, defaults to False\n'
            + '    :type print_list: bool, optional\n'
            + '    :return: Tupla con conteo y porcentaje de datos perdidos\n'
            + '    :rtype: tuple -> (str, str)\n'
            + '    """\n'
            + '    null_rows = df[var].isnull()\n'
            + '    na_count = null_rows.sum()\n'
            + '    if print_list:\n'
            + '        print(df[null_rows]["ccodealp"])\n'
            + '    return (na_count, na_count/len(df))\n'
            + '\n'
            + '\n'
            + '\n'
            + 'def plot_by_cat(df, plot_var, plot_by, global_stat=False, statistic="mean"):\n'
            + '    """Grafica una estadística de una variable del conjunto de datos y agrupa por categoría.\n'
            + '\n'
            + '    :param df: Conjunto de datos a graficar\n'
            + '    :type df: pandas.DataFrame\n'
            + '    :param plot_var: Variable a analizar\n'
            + '    :type plot_var: str\n'
            + '    :param plot_by: Columna a agrupar\n'
            + '    :type plot_by: str\n'
            + '    :param global_stat: Mostrar estadística de la población, defaults to False\n'
            + '    :type global_stat: bool, optional\n'
            + '    :param statistic: Estadística a graficar, defaults to "mean"\n'
            + '    :type statistic: str, optional\n'
            + '    :raises ValueError: En caso de proveer un valor no soportado de\n'
            + '                        statistic, o si la variable a agrupar no es categórica\n'
            + '    """\n'
            + '    if statistic not in {"mean", "median"}:\n'
            + '        raise ValueError(f"Estadística {statistic} no está soportada!")\n'
            + '    \n'
            + '    if df[plot_by].dtype != np.object:\n'
            + '        raise ValueError("Variable a agrupar debe ser categórica")\n'
            + '\n'
            + '    if statistic == "mean":\n'
            + '        group = df.groupby(by=[plot_by]).mean()[plot_var]\n'
            + '    else:\n'
            + '        group = df.groupby(by=[plot_by]).median()[plot_var] \n'
            + '    \n'
            + '    plt.figure(figsize = (10,6))\n'
            + '    plt.scatter(group.values, group.keys())\n'
            + '    plt.title(f"{statistic} de {plot_var} agrupada por {plot_by}")\n'
            + '    plt.grid(True)\n'
            + '    if global_stat:\n'
            + '        # Los valores reales del total de observaciones\n'
            + '        stats = {\n'
            + '            "undp_hdi": Stats(mean=0.7, median=0.73, std=0.16),\n'
            + '            "ht_region": Stats(mean=4.51, median=4.0, std=2.64),\n'
            + '            "gle_cgdpc": Stats(mean=14279.04, median=7884.72, std=17914.92),\n'
            + '            "imf_pop": Stats(mean=27.48, median=8.13, std=48.73),\n'
            + '            "wef_imort": Stats(mean=24.09, median=14.85, std=23.7),\n'
            + '            "who_alc2000": Stats(mean=4.95, median=4.28, std=3.84),\n'
            + '            "who_tobt": Stats(mean=23.29, median=23.1, std=9.24),\n'
            + '            "wdi_exph": Stats(mean=6.78, median=6.36, std=2.8)\n'
            + '        }\n'
            + '        col_stats = stats[plot_var]\n'
            + '        if statistic == "mean":\n'
            + '            global_stat = col_stats.mean\n'
            + '        elif statistic == "median":\n'
            + '            global_stat = col_stats.median\n'
            + '            \n'
            + '        plt.axvline(x=global_stat, color="red", ls="--")\n'
            + '\n'
            + '\n'
            + 'plot_by_cat(df, "gle_cgdpc", "ht_region", global_stat=True, statistic="median")\n'
          }
        </SyntaxHighlighter>

        Si se hizo todo correctamente, debiese ver el siguiente gráfico:

        <Row className="justify-content-md-center">
          <Col xs={12} sm={8} md={8}>
            <Image src={process.env.PUBLIC_URL + '/imgs/plot.png'} fluid />
          </Col>
        </Row>


        <li>La idea es calcular los  Z-score de las variables y observar la distancia del centro. Recordar la distribución normal estandarizada.</li>
        <li>La idea es básicamente agregar una nueva opción <code>statistic</code> a la función <code>plot_by_cat</code>. Al implementar esta nueva
        opción para calcular Z-score, básicamente se calcula el Z-score igual que en el caso anterior, pero para la variable categórica, se calcula
        el promedio del Z-score y se grafica este promedio. ¿Cuál es el centro en una distribución normal estandarizada?</li>
        <li>Acá se recomienda cargar el conjunto de datos original y jugar con diferentes muestras, o comparar la muestra cargada en este desafío,
        con el conjunto total de observaciones (el <code>CSV</code> original).</li>
      </ol>
    </div>
  )
}

export default withLayout(WeekSeven);