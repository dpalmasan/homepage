import React from "react";
import withLayout from "../../components/withLayout";
import MathJax from 'react-mathjax-preview';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function WeekTen() {
  return (
    <div className='container'>
      <h1 className='mt-5'>Clasificación</h1>
      <p className='lead'>
        En este material complementario se discuten temas relacionados a la semana de clasificación. En este módulo se ven dos enfoques para modelar un
        problema cuya variable dependiente es una variable discreta (en particular nos enfocamos en una variable binaria, pero se podría generalizar). Se
        discutirá básicamente el modelo de regresión logística.
      </p>

      <h3>Objetivos</h3>

      <ul>
        <li>Conocer la regresión logística.</li>
        <li>Tener la intuición de cómo se estiman los parámetros en una regresión logística.</li>
      </ul>

      <h3>Regresión Logística</h3>

      <p>En la semana de hoy lidiaremos con el caso en que la variable de salida (a predecir) es una variable discreta, categórica. En este contexto
      sólo consideraremos variables binarias, por ejemplo:</p>

      <ul>
        <li>¿Es el correo spam o no?</li>
        <li>Fallará el activo <code>X</code> dentro de los próximos 3 meses?</li>
        <li>¿Cliente tomará o no la oferta de un producto/servicio?</li>
      </ul>

      <p>
        <MathJax math={`
        Los casos anteriores, tienen un punto en común, la variable de salida es un evento que puede ocurrir o no (Bernoulli). Uno podría estar tentado 
        de estimar un modelo lineal como sigue:

        $$y = \\beta_0 + \\beta_1 X_1 + \\ldots + \\beta_m X_m + \\varepsilon_i$$

        Este modelo se conoce como modelo de probabilidad lineal, y tiene la ventaja que los coeficientes serán fáciles de interpretar. Sin embargo, 
        este modelo tiene un par de inconvenientes:
      `} />
      </p>

      <ul>
        <li>Las predicciones estarán fuera de rango supongamos que tenemos el evento es spam o no. Los posibles valores de la variable de salida
        podrían ser 0 o 1. Sin embargo, luego de la regresión, podríamos obtener valores como 0.5, ¿Cuál sería la interpretación?</li>
        <li>Siguiendo el punto anterior, uno podría estar tentado a interpretar el resultado como un valor de probabilidad. Sin embargo, las predicciones
        no estarán restringidas al intervalo <code>[0, 1]</code>, por ejemplo, ¿qué significa una predicción de 1.1 o -0.01? No serían probabilidades
        válidas.</li>
      </ul>

      <p>Para solventar el problema de las probabilidades fuera de rango, es que existe el modelo de <b>regresión logística</b>, que en esencia obtiene
      valores puros de probabilidad.</p>

      <MathJax math={`
      <p>La regresión logística es un método bastante utilizado para ajustar modelos con datos categóricos, especialmente donde la variable de respuesta 
      es una variable binaria (dicotómica). A diferencia de la regresión lineal, la regresión logística puede predecir probabilidades de forma 
      directa (las predicciones están restringidas al intervalo $(0, 1)$). Como se discutirá más adelante, la regresión logística preserva las 
      probabilidades marginales de los datos de entrenamiento. Los coeficientes del modelo también proveen una intuición sobre la importancia 
      relativa de cada regresor.</p>

      <p>Para usar la regresión logística, no es necesario entender cómo se deriva el modelo, ni como se implementa en algún lenguaje de programación. Sin 
      embargo, tener conocimiento de algunos detalles sobre su derivación pueden ayudar mucho a "debugear" problemas que puedan aparecer en la práctica, 
      además de mejorar el entendimiento de cuáles son las ventajas y desventajas de este modelo y cuándo es conveniente aplicarlo.</p>

      <p>Para hacer la explicación un poco más simple, nos enfocaremos en el caso de predecir un resultado binario. Asumiremos que el caso de interés (valor 
      de la variable dependiente) se codifica como 1, y el caso alternativo se codifica como 0 (ejemplo: El correo es spam o no, el cliente me va a comprar 
      un producto/servicio el próximo mes o no, etc.)</p>

      <p>El modelo de regresión logística, asume que el logaritmo de la proporción de probabilidades de una observación $y$ puede expresarse como una 
      función lineal de $K$ variables de entrada $x$:</p>

      $$log\\left(\\frac{P(y|x)}{1 - P(y|x)}\\right) = \\beta_0 + \\sum_{j=1}^{K} \\beta_j x_j$$

      La parte izquierda de la ecuación anterior, se conoce como el <em>logit</em> de $P$ (de ahí el nombre regresión logística). Ahora, si aplicamos 
      la función exponencial, tenemos:

      $$\\frac{P(y|x)}{1 - P(y|x)} = e^{\\beta_0 + \\sum_{j=1}^K \\beta_j x_j}$$

      $$  
          \\begin{array}{ll}
          \\frac{P(y|x)}{1 - P(y|x)} & =  e^{\\beta_0 + \\sum_{j=1}^K \\beta_j x_j}\\\\
          & = e^{\\beta_0} \\cdot \\prod_{j=1}^{K} e^{\\beta_j x_j}\\\\
          \\end{array}
      $$

      <p>Lo anterior nos muestra que los modelos logísticos son multiplicativos en la entrada, en lugar de aditivos como en la regresión lineal. El 
        valor de $e^{\\beta_j}$ nos dice cómo las posibilidades de que la variable de respuesta sea 1 aumentan (o disminuyen) a medida que $x_j$ aumenta
        en una unidad (manteniendo el resto constante).
      </p>

      <p>Para determinar los parámetros $\\beta_j$ del modelo, básicamente lo que se busca es encontrar el conjunto de parámetros que maximizan la 
        probabilidad de los datos, y esta probabilidad se expresa como el producto de las probabilidades $N$ observaciones, donde $N$ es el tamaño de la 
        muestra (este criterio se conoce como Estimación de Máxima Verosimiltud, o del inglés MLE <em>Maximum Likelihood Estimation</em>):
      </p>

      $$L(X|P) = \\prod_{i=1, y_i=1}^N P(y_i|x_i) \\prod_{i=1, y_i=0}^N 1 - P(y_i|x_i)$$

      Por temas numéricos (por ejemplo para evitar underflow en multiplicaciones de valores pequeños) y además por facilidad de 
      expresar el problema de optimización (derivadas de sumas), en general se trabaja con logarítmos:

      $$\\mathcal{L}(X|P) = \\sum_{i=1, y_i=1}^N log(P(y_i|x_i)) + \\sum_{i=1, y_i=0}^N log(1 - P(y_i|x_i))$$

      Maximizar la probabilidad logarítmica maximizará también la probabilidad. Como dato aparte, la medida $-2\\mathcal{L}(X|P)$ se le conoce 
      como <b>desviación</b> del modelo. Es un análogo a la suma de los residuales al cuadrado de la regresión lineal. Una útil heurística para 
      determinar la bondad de ajuste de un modelo de regresión logística es comparar la desviación del modelo con su <em>desviación nula</em>, que 
      es en esencia la desviación de un modelo constante que retorna la probabilidad global de la variable de respuesta, independiente de la entrada. Otra 
      medida importante es el pseudo-$R^2$, que es similar al $R^2$ de la regresión lineal y que se calcula:

      $$\\text{pseudo-}R^2 = 1 - \\frac{\\text{desviación}}{\\text{desviación nula}}$$
      `
      } />

      <p>Una forma de calcular los parámetros es iterativamente y minimizar la función de costo, un ejemplo se muestra como sigue:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import logging\n'
          + 'import numpy as np\n'
          + 'import pandas as pd\n'
          + '\n'
          + '\n'
          + 'def sigmoid(z):\n'
          + '    return 1 / (1 + np.exp(-z))\n'
          + '\n'
          + '\n'
          + 'def get_logistic_coeff(X, y, alpha=0.001, max_iters=500, tol=1e-9):\n'
          + '    """Calcula los coeficientes de la regresión logística utilizando MLE iterativo.\n'
          + '\n'
          + '    :param X: Datos de muestra\n'
          + '    :type X: np.array\n'
          + '    :param y: Vector de variable objetivo\n'
          + '    :type y: np.array\n'
          + '    :param alpha: Tasa de aprendizaje para maximización de verosimilitud, defaults to 0.001\n'
          + '    :type alpha: float, optional\n'
          + '    :param max_iters: Cantidad máxima de iteraciones, defaults to 100\n'
          + '    :type max_iters: int, optional\n'
          + '    :return: Coeficientes del modelo logístico\n'
          + '    :rtype: np.array\n'
          + '    """\n'
          + '    n = X.shape[1]\n'
          + '    coeffs = np.random.rand(n, 1)\n'
          + '    iters = 1\n'
          + '    convergence = False\n'
          + '    while not convergence and iters < max_iters:\n'
          + '        z = np.dot(X, coeffs)\n'
          + '        coeffs_1 = coeffs - alpha*np.dot(X.transpose(), (sigmoid(z) - y))\n'
          + '        convergence = np.linalg.norm(coeffs_1 - coeffs) <= tol\n'
          + '        coeffs = coeffs_1\n'
          + '        iters += 1\n'
          + '        \n'
          + '    if not convergence:\n'
          + '        logging.warning("No convergio")\n'
          + '    return coeffs\n'
          + '    \n'
          + '\n'
          + 'df = pd.read_csv("semana6/wells.csv", index_col=0)\n'
          + 'df.index.name = None\n'
          + 'X = np.transpose(np.array([np.ones(df.shape[0]), df["dist100"]]))\n'
          + 'y = df["y"].values.reshape(-1, 1)\n'
          + '\n'
          + 'get_logistic_coeff(X, y)\n'
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          'array([[ 0.60595935],\n'
          + '      [-0.62188192]])\n'
        }
      </SyntaxHighlighter>

      <p>Sólo para verificar, haciendólo con python y <code>smf</code>, observar que los coeficientes coinciden:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'logit_fit = smf.logit("y ~ dist100", df).fit()\n'
          + 'logit_fit.summary()'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/coeff_smf.png'} fluid />
        </Col>
      </Row>


      <p>
        <MathJax math={`
        Sin embargo este método iterativo tendría la desventaja de que hay que definir $\\alpha$ y dependiendo del valor puede que no converja, etc. En 
        general los paquetes generalmente implementan métodos de optimización que son más rápidos y garantizan convergencia en caso de existir óptimo.
      `} />
      </p>

      <p>
        Finalmente, para encontrar el óptimo de parámetros, involucra derivar la expresión de la probabilidad logarítmica, igualarla a cero, y finalmente
        resolver un sistema de ecuaciones no lineales. No es parte del curso entender esto, pero por lo general se utilizan métodos numéricos (por ejemplo
        Newton-Raphson, entre otros). No entraré en detalles respecto a eso, ya que sería complicar más el tema, sin embargo se debe tener en consideración
        que estos métodos numéricos tienen algunos problemas cuando:
      </p>


      <ol>
        <li>Existen columnas muy correlacionadas ya que cierta parte del cálculo involucra calcular inversa de una matriz considerando las observaciones,
        si se tienen columnas que sean combinación lineal de otra, puede dar una matriz singular haciendo imposible converger a una solución.</li>
        <li>Si los datos son perfectamente separables linealmente (predicción perfecta), también habrá problemas, esto es porque será imposible maximizar
        la probabilidad del conjunto de datos (los coeficientes podrían aumentar de manera indefinida y no habría convergencia). Aunque esto es muy raro que ocurra
        en la práctica.</li>
      </ol>

      <p>Retomando la idea de que la regresión logística preserva las probabilidades marginales de los datos usados para generar el modelo, supongamos
      que tenemos una variable binaria (tomaremos de ejemplo el conjunto de datos del desafío):</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import pandas as pd\n'
          + '\n'
          + '\n'
          + 'df = pd.read_csv("semana6/southafricanheart.csv", index_col=0)\n'
          + 'df.index.name = None\n'
          + 'df.groupby(["famhist", "chd"]).size().unstack(fill_value=0)\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/marginales_prob.png'} fluid />
        </Col>
      </Row>

      <p>
        <MathJax math={`
          Calculemos las probabilidades $P(\\text{chd}=1|\\text{famhist}=\\text{Absent})$ y $P(\\text{chd}=1|\\text{famhist}=\\text{Present})$:

          $$P(\\text{chd}=1|\\text{famhist}=\\text{Absent}) = \\frac{64}{64 + 206} \\approx 0.237$$

          $$P(\\text{chd}=1|\\text{famhist}=\\text{Present}) = \\frac{96}{96 + 96} \\approx 0.5$$
        `} />
      </p>

      <p>Ahora, usando la biblioteca <code>statsmodels</code>, generemos un modelo logístico que utilice la variable <code>famhist</code> para
      predecir <code>chd</code>:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import statsmodels.formula.api as smf\n'
          + '\n'
          + '\n'
          + 'logit_fit = smf.logit("chd ~ famhist", df).fit()\n'
          + 'logit_fit.predict({"famhist": ["Present", "Absent"]})\n'
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          '0    0.500000\n'
          + '1    0.237037\n'
          + 'dtype: float64'
        }
      </SyntaxHighlighter>

      <p>Observamos que hacer las predicciones con el modelo logístico, se obtuvieron las mismas probabilidades que calculamos a partir de los datos,
      esto es, se preservó la marginalidad de las probabilidades.</p>

      <p>Finalmente comentemos un poco de los resultados de la regresión, para ello podemos hacer <code>logit_fit.summary()</code>:</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/bondad_ajuste.png'} fluid />
        </Col>
      </Row>

      <p>Para ver bondad de ajuste, o en otras palabras, qué tan bueno es el modelo, podemos fijarnos en el valor del pseudo R-cuadrado, en los valores
      de la probabilidad logarítmica (Log Likelihood).</p>

      <p><b>Observación:</b> Tanto en la regresión lineal, como en la regresión logística, se hace el supuesto que los regresores son monotónicamente
      crecientes o decrecientes; en español simple, esto quiere decir que la variable de salida sólo aumenta a medida que el regresor aumenta o sólo
      disminuye. Si este no fuera el caso, entonces los parámetros estimados del modelo no tendrían validez, ¿qué podría decir de un beta positivo o
      negativo si la variable explicativa puede hacer que la variable de salida aumente o disminuya? Ejemplo real, en cierto modelo predictivo de
      propensión a la compra, se observó que la variable cantidad de campañas en los últimos 3 meses, tenía dos efectos: Si la variable era menor o igual
      que 1, la probabilidad de que los clientes compraran era baja (probablemente no se acampañaban lo suficiente). Por otro lado, si la cantidad de
      campañas era 2 o 3, la probabilidad de compra aumentaba. Sin embargo, si la cantidad de campañas que un cliente apareció era mayor que 3, el
      cliente ya no compraba, es decir, la probabilidad de compra disminuye (por ejemplo, el cliente ya queda molesto de tanta campaña y pierde el interés).
      Este es un caso claro de variable no monotónica, y en el cual el modelo de regersión logística sí o sí va a perder información una vez ajustado.
      Este es un problema con los modelos lineales y dependiendo de los niveles de precisión esperados, se debe tomar una decisión (ej. procesar la
      variable con tal que sea monotónicamente creciente/decreciente, perdiendo información, o usar un modelo no lineal, etc.).</p>

      <h3>Regresión Logística como modelo predictivo (visión de aprendizaje automático)</h3>

      <p>Como es de esperarse, la regresión logística también viene implementada en la biblioteca <code>sklearn</code>. En este material desarrollaremos
      el mismo ejemplo visto en las lecturas, pero se harán algunas fé de erratas. Iniciemos cargando los datos y el ambiente de trabajo:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import pandas as pd\n'
          + '\n'
          + 'from sklearn.linear_model import LogisticRegression\n'
          + 'from sklearn.model_selection import train_test_split\n'
          + 'from sklearn.preprocessing import StandardScaler\n'
          + '\n'
          + '\n'
          + '# Leer csv y remover nombre del indice\n'
          + 'df = pd.read_csv("semana6/wells.csv", index_col=0)\n'
          + 'df.index.name = None\n'
          + '\n'
          + '# Primero separamos, DESPUÉS escalamos\n'
          + 'X_train, X_test, y_train, y_test = train_test_split(\n'
          + '    df.loc[:, "dist100":"assoc"], df["y"], test_size=.33, random_state=11238)\n'
          + '\n'
          + '# El escalamiento no tiene efecto en el modelo predictivo\n'
          + '# Es sólo para comparar coeficientes en una misma escala\n'
          + 'scaler = StandardScaler()\n'
          + '\n'
          + '# Si usamos toda la muestra para generar el escalamiento\n'
          + '# estaríamos usando información del conjunto de validación en\n'
          + '# el escalador; información que en la práctica no tendriamos\n'
          + '# ¿Para qué usamos el conjunto de validación? Para estimar el error\n'
          + '# esperado fuera de muestra!\n'
          + 'scaler.fit(X_train)\n'
          + '\n'
          + 'X_train_scaled = scaler.transform(X_train)\n'
          + 'X_test_scaled = scaler.transform(X_test)\n'
          + 'X_train.head()\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/head_logit.png'} fluid />
        </Col>
      </Row>

      <p>Antes de generar un modelo predictivo, es saludable ver la distribución de la clase de salida, ya que si se tienen clases desbalanceadas, pueden
      ocurrir ciertos problemas que hay que ajustar <b>antes</b> de generar un modelo:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import seaborn as sns\n'
          + 'import matplotlib.pyplot as plt\n'
          + '\n'
          + '%matplotlib inline\n'
          + '\n'
          + 'plt.style.use("seaborn")\n'
          + 'plt.rcParams["figure.figsize"] = (6, 3)\n'
          + 'plt.rcParams["figure.dpi"] = 200\n'
          + '\n'
          + '# Primero nos gustaría ver la distribución de las clases en training y test\n'
          + 'fig, axs = plt.subplots(1, 2)\n'
          + 'fig.subplots_adjust(top=0.8)\n'
          + 'fig.suptitle("Proporción de clases", fontsize=16)\n'
          + 'pd.Series(y_train).value_counts(normalize=True, sort=False).plot.bar(ax=axs[0])\n'
          + 'axs[0].set(ylabel="ratio", title="Entrenamiento")\n'
          + 'pd.Series(y_test).value_counts(normalize=True, sort=False).plot.bar(ax=axs[1])\n'
          + 'axs[1].set(title="Validación")\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/class_distribution.png'} fluid />
        </Col>
      </Row>

      <p>Por lo menos vemos que la distribución del conjunto de entrenamiento y de prueba es similar (debería ser, ya que <code>train_test_split</code> intenta
      garantizar distribuciones similares. Ya que no hay problemas de clases desbalanceadas, podemos intentar ajustar un modelo de regresión logística:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'model = LogisticRegression().fit(X_train_scaled, y_train)\n'
          + '\n'
          + '# Predicción de clases (por defecto usa y_i tal que max(Pr(y|x)))\n'
          + 'y_pred = model.predict(X_test_scaled)\n'
          + '\n'
          + '# Podemos también obtener las probabilidades del evento (no es necesario el lambda, lol)\n'
          + 'y_pred_proba = model.predict_proba(X_test_scaled)[:, 1].round(2)\n'
        }
      </SyntaxHighlighter>

      <p>El método <code>predict</code>, básicamente predecirá la clase basandose en las probabilidades estimadas para cada clase dada la observación. Esto
      quiere decir que usa un umbral de <code>0.5</code>. Este umbral podrá ser ajustado acorde a las necesidades.</p>

      <p>Una forma de visualizar el rendimiento de nuestro clasificador, es visualizando la <b>matriz de confusión</b>. Esta matriz es en esencia una tabla
      de contingencia que compara las predicciones con los valores actuales de la clase (verdaderos):</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'from sklearn.metrics import plot_confusion_matrix\n'
          + '\n'
          + '\n'
          + 'titles_options = [("Matriz de Confusión sin normalización", None),\n'
          + '                  ("Matriz de Confusión normalizada", "true")]\n'
          + '\n'
          + 'for title, normalize in titles_options:\n'
          + '    disp = plot_confusion_matrix(model, X_test_scaled, y_test,\n'
          + '                                display_labels=(0, 1),\n'
          + '                                cmap=plt.cm.Blues,\n'
          + '                                normalize=normalize)\n'
          + '    disp.ax_.grid(False)\n'
          + '    disp.ax_.set_title(title)\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/confusion_matrix.png'} fluid />
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/confusion_matrix2.png'} fluid />
        </Col>
      </Row>

      <p>De esta matriz podemos estimar métricas tales como:</p>

      <ul>
        <li>Verdaderos Positivos: Clasificados como clase positiva que eran realmente de la clase positiva.</li>
        <li>Falsos Positivos: Clasificados como clase positiva que eran realmente de la clase negativa.</li>
        <li>Verdaderos Negativos</li>
        <li>Falsos Negativos</li>
        <li>Precisión: De los que el clasificador clasificó como clase positiva ¿Qué proporción eran realmente positivas?</li>
        <li>Especificidad: ¿Qué tan bueno es el clasificador para evitar falsas alarmas?</li>
        <li>Sensibilidad/Recall: De las observaciones que eran de la clase positiva ¿Qué proporción el clasificador clasificó como positiva?</li>
        <li>Exactitud: Proporción de clases correctamente clasificadas respecto del total</li>
        <li>Puntaje F1: Básicamente una especie de promedio ponderado entre precisión y recall.</li>
      </ul>



      <p>
        <MathJax math={`
          Las ecuaciones son las siguientes, considerando $FP$ (falsos positivos), $TP$ (verdaderos positivos), $FN$ (falsos negativos) y 
          $TN$ (verdaderos negativos):

          $$\\text{Exactitud} = \\frac{TP + TN}{TP + TN + FP + FN}$$

          $$\\text{Precisión} = \\frac{TP}{TP + FP}$$

          $$\\text{Sensibilidad/Recall} = \\frac{TP}{TP + FN}$$

          $$\\text{Especificidad} = \\frac{TN}{TN + FP}$$

          $$\\text{F1} = \\frac{2\\cdot \\text{Recall}\\cdot\\text{Precisión}}{\\text{Recall} + \\text{Precisión}}$$

          Por supuesto, no tenemos que memorizarnos las fórmulas, ya que todas estas métricas están implementadas ya en <code>sklearn</code>, sin embargo 
          tener intuiciones sobre qué significan, ayuda a la hora de resolver problemas:
        `} />
      </p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'from sklearn.metrics import classification_report\n'
          + '\n'
          + '\n'
          + 'print(classification_report(y_test, y_pred))\n'
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          '                  precision    recall  f1-score   support\n'
          + '\n'
          + '          0      0.59         0.41     0.49      422\n'
          + '          1      0.65         0.79     0.71      575\n'
          + '\n'
          + 'accuracy                               0.63      997\n'
          + 'macro avg        0.62         0.60     0.60      997\n'
          + 'weighted avg     0.62         0.63     0.62      997\n'
        }
      </SyntaxHighlighter>


      <p>Otra herramienta para medir el rendimiento de un clasificador es la <b>curva ROC</b> (del inglés Receiver Operating Characteristic o
      Característica Operativa del Receptor). Esta curva representa la gráfica de la sensibilidad frente a la especificidad para un clasificador binario
      según varía el umbral de discriminación (es decir, sobre qué probabilidad se determina que el evento/salida pertenece a la clase positiva o no). Idealmente
      el área bajo la curva de la curva ROC debiese ser 1 (es decir, precisión y recall perfectos). El área bajo la curva representa la habilidad del clasificador
      para distinguir entre la clase positiva o negativa. Básicamente, representa la probabilidad de que una muestra positiva escogida al azar sea
      priorizada por sobre una muestra negativa escogida al azar. Por supuesto, <code>sklearn</code> también implementa funciones que calculan estas
      métricas:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'from sklearn.metrics import roc_curve\n'
          + 'from sklearn.metrics import auc\n'
          + '\n'
          + '\n'
          + 'fp, tp, thres = roc_curve(y_test, y_pred_proba)\n'
          + 'roc_auc = auc(fp, tp)\n'
          + '\n'
          + 'plt.plot(fp, tp, label=f"ROC AUC (area = {roc_auc:.2f})")\n'
          + 'plt.plot([0, 1], [0, 1], color="r", linestyle="--")\n'
          + 'plt.xlim([0.0, 1.0])\n'
          + 'plt.ylim([0.0, 1.05])\n'
          + 'plt.xlabel("Proporción de Falsos Positivos")\n'
          + 'plt.ylabel("Proporción de Verdaderos Positivos")\n'
          + 'plt.title("Curva ROC")\n'
          + 'plt.legend(loc="lower right")\n'
        }
      </SyntaxHighlighter>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/roc_curve.png'} fluid />
        </Col>
      </Row>

      <p>Como detalle, idealmente queremos que el AUC sea cercano a 1, y mayor que 0.5. Un AUC de 0.5 significa entropía máxima y básicamente el clasificador
      no es mejor que lanzar una moneda.</p>

      <h4>Alternativas para estimar el error fuera de muestra</h4>

      <p>En general, antes de poner en producción un clasificador, nos gustaría tener una estimación del rendimiento cuando esté en operación. Por ejemplo
      nos gustaría estimar el error fuera de muestra (o quizás otras métricas de rendimiento). Para ello, hasta ahora hemos visto el caso de separar
      el conjunto de datos en dos: uno de entrenamiento y otro de validación. Sin embargo, hay casos en que no contamos con la cantidad suficiente de
      muestras para darnos ese lujo de separar los datos, en estos casos, una alternativa es usar validación cruzada. Usando validación cruzada, intentamos
      estimar este parámetro de rendimiento (recordar estimación de parámetros) y su valor esperado. Por ejemplo, intentemos estimar el valor esperado de la
      precisión y el puntaje F1 fuera de muestra, usando los datos de entrenamiento:
      </p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import numpy as np\n'
          + 'from sklearn.model_selection import cross_validate\n'
          + '\n'
          + '\n'
          + 'logistic_reg = LogisticRegression()\n'
          + 'cv_results = cross_validate(logistic_reg, X_train_scaled, y_train, cv=5, scoring=("f1", "precision"))\n'
          + 'print(f"Promedio Precision: {np.mean(cv_results[\'test_precision\'])}")\n'
          + 'print(f"Promedio F1: {np.mean(cv_results[\'test_precision\'])}")\n'
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          'Promedio Precision: 0.6245966156589918\n'
          + 'Promedio F1: 0.6245966156589918\n'
        }
      </SyntaxHighlighter>

      <p>Si observan, nos dieron resultados similares a los actuales estimados fuera de muestra que obtuviemos con el conjunto de validación. Sin embargo,
      esta estimación como toda estimación, posee un <b>sesgo</b> y <b>varianza</b>. El sesgo está dado porque no utilizamos todos los datos para entrenar
      el modelo (y probablemente, el modelo rinda mejor en la práctica). Podríamos decir que lo que obtenemos es una estimación pesimista del rendimiento. Una
      forma de solventar esto, es considerar el caso especial de validación cruzada <code>LeaveOneOut</code>. En este caso, idealmente obtenemos una
      estimación insesgada, pero que puede tener mucha varianza, dependiendo de la cantidad de datos.</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'from sklearn.model_selection import LeaveOneOut\n'
          + 'from sklearn.metrics import accuracy_score\n'
          + '\n'
          + '\n'
          + 'loocv_results = cross_validate(logistic_reg, X_train_scaled, y_train, cv=LeaveOneOut(), scoring="accuracy")\n'
          + 'print(f"Promedio Exactitud: {np.mean(loocv_results[\'test_score\'])}")\n'
          + 'print(f"Exactitud Fuera de Muestra: {accuracy_score(y_test, y_pred)}")\n'
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          'Promedio Exactitud: 0.6050420168067226\n'
          + 'Exactitud Fuera de Muestra: 0.6308926780341023\n'
        }
      </SyntaxHighlighter>

      <p>Se observa que la estimación es cercana a la obtenida "fuera de muestra" en nuestro caso, a pesar de sólo haber usado un dato para validar. Sin
      embargo, entrenar el modelo tantas veces, puede ser intensivo computacionalmente, por lo tanto, si se tiene una cantidad de datos suficiente, es mejor
      hacer validación cruzada con <code>K</code> pliegues. Si la cantidad de datos es muy pequeña, quizás es buena idea usar un esquema <code>LeaveOneOut</code>.</p>

      <h3>Conclusiones (relacionadas a objetivos)</h3>

      <ul>
        <li>Se estudió la regresión logística y el modelo de probabilidad lineal, se discutieron ventajas, desventajas y algunas consideraciones.</li>
        <li>Se realizó un ejemplo práctico de regresión logística con <code>sklearn</code>.</li>
        <li>Se explicaron e ilustraron métricas de rendimiento para tener una idea de qué tan bueno es el clasificador.</li>
        <li>Se discutieron alternativas para estimar el rendimiento fuera de muestra (Validación cruzada).</li>
      </ul>
    </div>
  )
}

export default withLayout(WeekTen);