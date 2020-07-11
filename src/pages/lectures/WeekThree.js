import React from "react";
import withLayout from "../../components/withLayout";
import MathJax from 'react-mathjax-preview';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from "react-router-dom";


function WeekThree() {

  return (
    <div className='container'>
      <h1 className='mt-5'>Estructuras de Datos y repaso de ciclos</h1>
      <p className='lead'>
        La semana de estructuras de datos es ya cerca de la última semana de este módulo de Introducción a Python. Es claro que
        en un corto período de tiempo, quedan muchas características del lenguaje que explicar. Sin embargo, las herramientas entregadas
        deberían ser suficientes para empezar a trabajar con ciencia de datos e investigar por ustedes mismos otras bibliotecas no vistas
        en el curso.</p>

      <ul>
        <li><Link to="/week3#ciclos">Repaso de ciclos y funciones</Link></li>
        <ul>
          <li><a href="#/week3#for">Ejemplo ciclo for</a></li>
          <li><a href="#/week3#while">Ejemplo ciclo while</a></li>
        </ul>
        <li><Link to="/week3#estructuras">Estructuras de datos típicas en Python</Link></li>
        <li><Link to="/week3#complejidad">Complejidad Asintótica</Link></li>
        <li><Link to="/week3#funcionales">Comprensiones de Lista y Operaciones Funcionales</Link></li>
        <li><Link to="/week3#pandas">Data Science con Python y Pandas</Link></li>
      </ul>

      <h2 id="ciclos">Repaso de ciclos y funciones</h2>

      <p>Como repasamos en clases, existen dos tipos de ciclos: <code>while</code> y <code>for</code>. En la práctica:</p>

      <ul>
        <li>Un ciclo <code>for</code> se utiliza cuando se itera sobre una secuencia (<code>list</code>, <code>string</code>, etc). Es decir, se sabe
        de antemano la cantidad de iteraciones.</li>
        <li>Un ciclo <code>while</code> se utiliza cuando el criterio de parada es una condición.</li>
      </ul>

      <h3 id="for">Ejemplo ciclo for</h3>
      <p>Consideremos el problema de sumar los 100 primeros números naturales. Para ello podemos usar la función <code>range</code>. Esta función
      básicamente genera una secuencia de números (ver documentación). Para calcular la suma, además podemos usar una variable <b>acumuladora</b> que
      irá acumulando la suma a medida que se <b>itera</b> en el ciclo. Como inicialmente la suma total es 0, el acumulador se <b>inicializa</b> en valor
      0:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "suma = 0\n"
          + "for i in range(101):\n"
          + "    suma += i\n"
          + "\n"
          + "print(f\"La suma de los 100 primeros números naturales es: {suma}\")\n"
        }
      </SyntaxHighlighter>

      <p>El resultado del código debería mostrar 5050. El código funciona de la siguiente forma, primero se define una variable acumuladora, que irá
      acumulando el resultado de la suma, la variable se le da el identificador <code>suma</code>. Posteriormente, se itera sobre los 100 primeros
      números naturales (<code>range(101)</code> generará la secuencia <code>0, 1, 2, ..., 100</code>), en este caso <code>i</code> es la variable
      de iteración y en cada iteración tomará un valor de la secuencia dada por <code>range</code>. Dentro del bloque del ciclo <code>for</code> se
      agrega la instrucción de sumar cada número de la secuencia generada utilizando <code>range</code> y se actualiza el valor de la suma, haciendo
      <code>suma += i</code> que es equivalente a hacer <code>suma = suma + i</code>. Al terminar el ciclo, debiese haberse calculado la suma deseada.
      Queda como ejercicio para el lector, intente implementar el código anterior utilizando un ciclo <code>while</code>.</p>

      <h3 id="while">Ejemplo ciclo while</h3>
      <p>Veamos ahora un ejemplo de ciclo <code>while</code>. Para ello, y como repaso, implementaremos una función que calcule la raíz
      cuadrada de un número <code>a</code> utilizando el método de Newton-Raphson. Básicamente:</p>

      <p>
        <MathJax math={
          `$$x_{k+1} = x_{k} - \\frac{x_{k}^2 - a}{2x_{k}}$$
          Hasta que $|x_{k + 1} - x_{k}| \\leq tol$ y $x_0$ es arbitrario, idealmente cercano a la solución, por lo que se puede usar el valor 
          de $a$ dado por el usuario, y tol es una tolerancia dada por el usuario, consideremos por defecto precisión hasta el tercer decimal, es decir 
          $tol = 10^{-3}$.
          `} />
      </p>

      <p>Se observa, que el criterio de detención del algoritmo es una condición, es decir, a priori no se sabe exactamente cuántas veces
      se va a iterar. Una posible implementación de este algoritmo es como sigue:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "def raiz_newton_raphson(a, tol=1e-3):\n"
          + "  x0 = a\n"
          + "  x1 = x0 - (x0 ** 2 - a) / (2 * x0)\n"
          + "\n"
          + "  while not abs(x1 - x0) <= tol:\n"
          + "      x0 = x1\n"
          + "      x1 = x0 - (x0 ** 2 - a) / (2 * x0)\n"
          + "\n"
          + "  return x1\n"
        }
      </SyntaxHighlighter>

      <p>Notamos que usamos la palabra reservada <code>def</code> con la que básicamente estamos definiendo una función que podreemos
      reutilizar. Por ejemplo, calculemos las raíces de diferentes números:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "print(f\"La raiz de 2 es {raiz_newton_raphson(2)}\")\n"
          + "print(f\"La raiz de 25 es {raiz_newton_raphson(25)}\")\n"
          + "print(f\"La raiz de 19 es {raiz_newton_raphson(19)}\")\n"
        }
      </SyntaxHighlighter>

      <p>Lo que entrega como salida:</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "La raiz de 2 es 1.4142135623746899\n"
          + "La raiz de 25 es 5.000000000053723\n"
          + "La raiz de 19 es 4.358898943541578\n"
        }
      </SyntaxHighlighter>

      <p>Estos son dos ejemplos que ilustran las diferencias entre usar ciclos <code>for</code> y <code>while</code>.</p>

      <h2 id="estructuras">Estructuras de datos típicas en Python</h2>

      <p>Una estructura de datos es básicamente una colección de valores y relaciones entre estos valores para representar datos y operar sobre
      ellos. Python implementa estructuras de datos típicas como por ejemplo: listas,  tuplas, conjuntos, pares llave-valor, entre otros.</p>

      <h3>Listas</h3>

      <p>Una lista es una colección de objetos. Para declarar una lista, se utilizan corchetes, por ejemplo, si queremos declarar una lista
      con nombres de frutas, podemos hacer: <code>frutas = ["pera", "limón", "manzana"]</code>. Para obtener el tamaño de una lista, podemos
      utilizar la función <code>len</code>, por ejemplo <code>len(frutas)</code> sería 3, ya que la lista contiene 3 elementos. Para acceder
      a un elemento en la posición <code>i</code> de la lista, utilizamos corchetes y el índice: <code>lista[i]</code>. Cabe destacar que
      los índices de las listas <b>comienzan desde 0</b>, por lo tanto los índices válidos van desde <code>0</code> hasta <code>n - 1</code> donde
      <code>n</code> es el tamaño de la lista. Por ejemplo si queremos acceder al segundo elemento de la lista frutas (limón), podemos ejecutar
      <code>frutas[1]</code>. Otra característica importante de las listas, es que son objetos <b>mutables</b> es decir, pueden alterarse en
      tiempo de ejecución, por ejemplo si hacemos <code>frutas[0] = "frutilla"</code>, ahora la lista <code>frutas</code> contendrá
      los elementos <code>["frutilla", "limón", "manzana"]</code>.</p>

      <h3>Tuplas</h3>

      <p>Una tupla es similar a una lista, con la excepción de que una tupla es <b>inmutable</b>, es decir, una vez declarada, no puede
      modificarse en tiempo de ejecución. Para definir una tupla, se usan paréntesis. Por ejemplo, podemos definir una tupla que contenga
      frutas: <code>frutas = ("pera", "limón", "manzana")</code>. La función <code>len</code> también puede utilizarse para obtener el
      largo de una tupla, y para acceder al elemento en la posición <code>i</code> de la tupla se hace idéntico al caso de las listas. Sin embargo,
      si tratamos de hacer algo como <code>frutas[0] = "frutilla"</code>, python arrojará el siguiente
      error: <code>TypeError: 'tuple' object does not support item assignment</code>. Esto es debido a que las tupla son inmutables. En general
      las tuplas se utilizan cuando no se planea modificar la colección de elementos (ej. definir una constante), o se requiere una colección inmutable
      (ej. Una "llave" en un par llave-valor).</p>

      <h3>Set</h3>

      <p>Un <code>set</code> es una colección de datos, similar a una lista, con la excepción de que no puede contener elementos repetidos. Se
      utiliza en general para tener una "memoria" para consultar y hacer más eficientes algunos procesos, como por ejemplo evitar hacer
      cálculos repetidos. Un set se define como sigue: <code>frutas = &#123;"manzana", "pera", "piña"&#125;</code>. Por ejemplo, supongamos que
      quisiera saber si el plátano está dentro del set, esta consulta se haría mediante: <code>"plátano" in frutas</code>, y en este caso
      retornaría <code>False</code>. Esta operación también se puede hacer en listas, pero es menos eficiente que en sets, debido a que
      la complejidad asintótica de buscar un elemento en una lista es mayor a la complejidad asintótica de buscar un elemento en un set. Para
      mas detalle, referirse a la sección de complejidad asintótica.</p>

      <h3>Diccionarios</h3>

      <p>Esto lo veremos en la última semana del curso, pero vale la pena digerirlo de inmediato. Un diccionario es un conjunto de pares
      clave-valor, y que son eficientes para consultar elementos (básicamente las claves están almacenadas en una estructura similar a un set).
      Por ejemplo, supongamos que queremos implementar una bolsa de supermercado, se podría hacer algo
      como: <code>compras = &#123; "platano": 3, "peras": 2, "manzana": 1 &#125;</code>. Luego, si quisiera consultar por cuántas manzanas
      tiene el cliente, podría hacer algo como: <code>compras["manzana"]</code>, lo cual retornaría 1. La restricción de los diccionarios es
      que las claves deben ser <b>inmutables</b>.</p>

      <h2 id="complejidad">Complejidad Asintótica</h2>

      <p>Estos son temas bastante relevantes a la hora de resolver problemas reales. Lo digo por experiencia propia, muchos algoritmos, o modelos
      de machine learning o de procesamiento de datos, podrían no correr dependiendo del volumen y recursos computacionales disponibles. Y esto no
      lo resuelve mágicamente tener computación en la "nube" (que teóricamente no hay diferencia entre eso y tener un data center). Hay algoritmos
      que no escalan, y principalmente es porque tienen que resolver problemas de optización que no escalan o que no son paralelizables para
      computarlos en tiempos prácticos. Dado que el curso es pequeño, no puedo pretender abordar todo, pero sí puedo dar una pincelada de qué
      significa la complejidad asintótica. Para ello tomemos como ejemplo el problema de buscar un elemento en una lista.</p>

      <p>Para simplificar el problema, supongamos que tenemos una lista de enteros, y supongamos que queremos saber si el elemento <code>n</code>
      se encuentra dentro de la lista. Un algoritmo sencillo sería, iterar por cada elemento de la lista, y si el elemento coincide con el
      elemento buscado, <b>retornar</b> <code>True</code>, si la búsqueda termina y no se encuentra el elemento retornar <b>False</b>.</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "def busqueda_lineal(lista, n):\n"
          + "  for item in lista:\n"
          + "      if item == n:\n"
          + "          return True\n"
          + "  return False\n"
        }
      </SyntaxHighlighter>


      <p> Tenemos diferentes casos posibles:</p>

      <ul>
        <li>El caso optimista: El elemento se encuentra en la primera posición de la lista, por lo tanto se itera una sóla vez.</li>
        <li>El peor caso: El elemento se encuentra al final de la lista. Por lo tanto se debería iterar <code>n</code> veces donde <code>n</code> es
        la cantidad de elementos de la lista.</li>
        <li>El caso promedio: Donde se revisarán una cantidad de elementos proporcional a la cantidad de elementos de la lista.</li>
      </ul>

      <p>
        <MathJax math={
          `Es intuitivo que se iterará una cantidad de veces proporcional a $n$, y a lo mucho, se iterará $n$ veces. Para expresar esta inituición 
          se utiliza lo que se conoce como notación $Big$-$O$, y en este caso se dice que el algoritmo es $O(n)$, es decir que su tiempo de ejecución 
          será proporcional a la entrada, en este caso el largo de la lista de entrada. El algoritmo de búsqueda mencionado se conoce como <b>búsqueda lineal</b> y 
          la razón de ello es que su complejidad asintótica ($big$-$O$) es proporcional al largo de la lista, básicamente el tiempo de ejecución podría 
          expresarse como una función lineal $T(n) = an + b$ del largo de la lista. 
          `} />
      </p>

      <p>Supongamos ahora que la lista de números se encuentra ordenada. ¿Será posible hacer la búsqueda más eficiente? (que el tiempo de ejecución
      sea menor). Si la lista estuviese ordenada, por ejemplo <code>1, 2, 3, 100, 993, 1000, 2934</code>, podríamos pensar una forma más inteligente de buscar.
      Por ejemolo, supongamos que buscamos el número <code>993</code>. Podríamos empezar por el medio de la lista, es decir, el elemento que esté
      en la posición <code>(0 + 6)//2 = 3</code> (6 es el largo de la lista y // representa la división entera). Comenzaríamos entonces por el
      elemento en el índice 3, que en este caso sería 100. Se tiene que <code>100 != 993</code>, pero además sabemos que la lista está ordenada,
      por lo tanto podemos descartar todos los elementos que estén entre las posiciones 0 y 3, y buscar elementos entre las posiciones 3 y 6. Podemos
      nuevamente buscar el punto medio <code>(3 + 6)//2 = 4</code>, y en este caso encontramos el número <code>993</code></p>.

      <p>
        <MathJax math={
          `Si se observa, el espacio de búsqueda se va dividiendo a la mitad en cada iteración. Por lo tanto, el número máximo de iteraciones 
          que pueden ocurrir es $log_2(n)$, por lo tanto, decimos que la complejidad asintótica de este algoritmo de búsqueda es $O(log_2(n))$.
          `} />
      </p>

      <p>Este algorítmo clásico de búsqueda, se conoce como <b>búsqueda binaria</b> y se implementaría como sigue:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "def busqueda_binaria(lista, n):\n"
          + "  found = False\n"
          + "  a = 0\n"
          + "  b = len(lista) - 1\n"
          + "  while not found and a <= b:\n"
          + "      mid = (a + b) // 2\n"
          + "      if lista[mid] == n:\n"
          + "          found = True\n"
          + "      elif n > lista[mid]:\n"
          + "          a = mid + 1\n"
          + "      else:\n"
          + "          b = mid - 1\n"
          + "  return found\n"
        }
      </SyntaxHighlighter>

      <p>
        <MathJax math={
          `Consideremos un caso más simple ahora. Supongamos que queremos calcular la suma de los $n$ primeros números naturales. Hasta ahora 
          hemos visto dos formas de lograr esto. Una forma puede ser con un ciclo y un acumulador, ¿Qué complejidad asintótica tiene este algoritmo? 
          Como se observa, se itera $n$ veces, donde $n$ es la entrada del algoritmo, por lo tanto la complejidad asintótica sería $O(n)$ es decir, 
          el tiempo de cómputo sería proporcional al valor de $n$ en este algoritmo. ¿Podemos hacerlo más eficiente? Si recuerdan en la semana 1, vimos 
          la fórmula de Gauss:

          $$\\sum_{i=0}^n i = \\frac{n(n+1)}{2}$$

          Básicamente, el resultado se obtiene con un sólo cálculo, e independiente del valor de n, se requiere la misma serie de operaciones aritméticas 
          para obtener el resultado de la sumatoria. Por lo tanto decimos que este algoritmo es de complejidad constante, y la notación es $O(1)$. En 
          este caso independiente del valor de $n$, el tiempo de ejecución no varía.
          `} />
      </p>

      <p>Para las estructuras de datos típicas en python, y la complejidad asintótica de sus operaciones (métodos), puede revisar
      <a href="https://wiki.python.org/moin/TimeComplexity" rel="noopener noreferrer" target="_blank"> la documentación de python</a>.</p>

      <h2 id="funcionales">Comprensiones de Lista y Operaciones Funcionales</h2>

      <p>Este es un tópico bien <em>pythónico</em> en el sentido de que es la forma python de escribir código. Al principio se puede hacer un
      poco complejo de entender, pero con práctica, creanme que ahorra bastante tiempo saber esta característica de python, por las siguientes
      razones:</p>

      <ul>
        <li>Escribir código se hace más rápido y menos repetitivo</li>
        <li>No todas las personas tienen el mismo estilo al escribir código, por lo que les ayudará a diversificar su entendimiento códigos python.</li>
      </ul>

      <h3>Comprensiones de Listas</h3>

      <p>Las comprensiones de lista son una forma compacta de generar listas en python. Por ejemplo, supongamos que queremos los números entre 1 y
      300 que sean divisibles por 3 y por 5. Existen varias formas de hacer esto, pero una forma compacta de
      lograrlo en python sería como sigue: <code>numeros = [n for n in range(1, 301) if n % 3 == 0 and n % 5 == 0]</code>. Dicho código se puede leer
      como <em>Quiero todos los n, que estén en el rango 1 a 300, y que sean divisibles por 3 y por 5.</em>.</p>

      <h3>Operaciones Funcionales</h3>

      <p>Python tiene una biblioteca de operaciones que siguen un paradigma de programación funcional. La idea de este paradigma es que agiliza el
      prototipado, permitiendo escribir poco código que realiza operaciones compuestas. La desventaja de este paradigma, es que es un poco complicado
      de entender al comienzo, sobre todo si hemos estado aprendiendo un paradigma procedural (que es lo que hemos estado haciendo desde las primeras
      semanas). Las funciones que se utilizan frecuentemente son: <code>map</code>, <code>filter</code>, <code>reduce</code>.</p>

      <p>La función <code>map</code>, básicamente le aplica una función a todos los elementos de una secuencia, y retorna una secuencia con
      los retornos de la función aplicada. Veamos dos ejemplos, uno simple y uno más sofisticado. Para el caso simple, supongamos que tenemos una
      lista de números y queremos si los números son divisibles por 3 y por 5</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "lista = [1, 2, 15, 4, 256, 100, 60]\n"
          + "for result in map(lambda x: x % 3 == 0 or x % 5 == 0, lista):\n"
          + "    print(result)\n"
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "False\n"
          + "False\n"
          + "True\n"
          + "False\n"
          + "False\n"
          + "True\n"
          + "True\n"
        }
      </SyntaxHighlighter>

      <p>Notar que usamos una expresión que no habíamos visto antes: <code>lambda</code>. No se asusten, lo que hace <code>lambda</code> es básicamente
      definir una <b>función anonima</b>, es decir, una función sin nombre. La sintaxis es similar a la de las funciones y sigue
      el siguiente patrón: <code>lambda argumentos: retorno</code>. Por lo que, el siguiente código es equivalente:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "def divisible_por_5_o_3(n):\n"
          + "  return n % 3 == 0 or n % 5 == 0\n"
          + "\n"
          + "\n"
          + "lista = [1, 2, 15, 4, 256, 100, 60]\n"
          + "for result in map(divisible_por_5_o_3, lista):\n"
          + "    print(result)\n"
        }
      </SyntaxHighlighter>

      <p>La ventaja de usar <code>lambda</code> es, si requiero una función que sólo utilizaré una vez, ¿para qué agregar más código definiendola
      vía <code>def</code> si puedo definirla en la misma línea que la utilizaré? Esto permite agilizar escribir código.</p>

      <p>Ahora un ejemplo sofisticado, supongamos que tenemos una lista de oraciones, y queremos contar la cantidad de palabras positivas de las
      oraciones. Por el momento, supongamos que las palabras positivas están en un set. Podríamos aplicar la función map como sigue:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "PALABRAS_POSITIVAS = {\n"
          + "  \"beneficios\",\n"
          + "  \"excelentes\",\n"
          + "  \"buen\",\n"
          + "  \"positivo\",\n"
          + "  \"optimista\",\n"
          + "  \"encanta\",\n"
          + "  \"bien\",\n"
          + "}\n"
          + "\n"
          + "oraciones = [\n"
          + "    \"El producto es un asco\",\n"
          + "    \"Los beneficios son excelentes\",\n"
          + "    \"En el restorán tuve un muy buen servicio\",\n"
          + "    \"Soy muy positivo y optimista y me encanta hablar bien de los demás\",\n"
          + "]\n"
          + "\n"
          + "conteo = map(lambda s: sum(s.count(w) for w in PALABRAS_POSITIVAS), oraciones)\n"
          + "for index, conteo in enumerate(conteo):\n"
          + "    print(f\"Palabras positivas oración {index + 1}: {conteo}\")\n"
        }
      </SyntaxHighlighter>

      <p>Lo que da como salida:</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "Palabras positivas oración 1: 0\n"
          + "Palabras positivas oración 2: 2\n"
          + "Palabras positivas oración 3: 1\n"
          + "Palabras positivas oración 4: 4\n"
        }
      </SyntaxHighlighter>

      <p>La función <code>filter</code>, como el nombre lo sugiere, filtra una secuencia, en base a una función, y elimina los elementos que
      no retornen <code>True</code> para esa función. Por ejemplo, supongamos que tenemos una lista de palabras, y queremos sólo las palabras
      con más de 3 caractéres:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "palabras = [\"el\", \"animal\", \"come\", \"las\", \"América\", \"lo\", \"pos\", \"laguna\"]\n"
          + "for palabra in filter(lambda x: len(x) > 3, palabras):\n"
          + "    print(palabra)\n"
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "animal\n"
          + "come\n"
          + "América\n"
          + "laguna\n"
        }
      </SyntaxHighlighter>

      <p>Finalmente la función <code>reduce</code>, es la forma funcional de agregar datos. Supongamos que queremos calcular la sumatoria
      de una lista de números. Esto podría hacerse iterando por cada elemento de la lista o secuencia, e ir acumulando los resultados de la suma.
      Sin embargo reduce, permite implementar este patrón, de forma simple con una función que reciba dos argumentos y agregando los datos:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "from functools import reduce\n"
          + "\n"
          + "\n"
          + "lista = [1, 4, 9, 7, 10, 11]\n"
          + "print(reduce(lambda x, y: x + y, lista))\n"
        }
      </SyntaxHighlighter>

      <p>El resultado de la operación anterior es <code>42</code>. La forma en que opera reduce es la siguiente:</p>

      <ul>
        <li><code>(((((1 + 4) + 9) + 7) + 10) + 11)</code></li>
        <li><code>((((5 + 9) + 7) + 10) + 11)</code></li>
        <li><code>(((14 + 7) + 10) + 11)</code></li>
        <li><code>((21 + 10) + 11)</code></li>
        <li><code>(31 + 11)</code></li>
        <li><code>42</code></li>
      </ul>

      <p>Claro que el poder de <code>reduce</code> no es únicamente calcular la suma de los elementos de una secuencia, si no que
      puede realizar cualquier operación de agregado de una secuencia.</p>

      <h2 id="pandas">Data Science con Python y Pandas</h2>

      <p>No es que el lenguaje python esté directamente ligado con Ciencia de Datos, ni nada por el estilo. La ciencia de datos es agnóstica
      al lenguaje, sin embargo, Python es un lenguaje simple de aprender, rápido de escribir, tiene eficiencia para la mayoría de los casos de uso
      y mucho soporte de la comunidad. Por las razones mencionadas, es que se han desarrollado muchas bibliotecas que ayudan a resolver problemas
      de ciencia de datos. Una de las bibliotecas más utilizadas para manipulación de datos es <code>pandas</code>. Pandas básicamente permite manejar
      datos de forma tabular, usando como abstracción o representación los objetos de tipo <code>DataFrame</code>. Dicha abstracción, permite extraer
      datos de diferentes fuentes y tener la misma representación sobre los datos, lo que permite fácil acceso y operación.</p>

      <p>Dentro del curso trabajaremos con archivos <code>.csv</code>, pero <code>pandas</code> soporta una gran variedad de fuentes de datos
      tales como: <code>excel</code>, datos de APIs como por ejemplo una API que envíe objetos <code>JSON</code>, diferentes motores de BBDD, etc.
      En la práctica, es más común leer datos de BBDD, y por lo general, los que mantienen la plataforma de datos son el equipo de Ingeniería de Datos,
      en lo que comúnmente se conoce como <em>Data Warehouse</em>. También en la industria se escuchan varios conceptos rimbombantes, como por ejemplo
      <em>data lake</em>, pero eso sólo significa que es un "repositorio" donde hay datos en su forma "cruda" (por ejemplo un disco en la nube), aunque
      tu propia laptop podría ser un data lake (tienes textos, bytes, archivos en múltiples formatos sin procesar).</p>

      <p>Dejo a continuación un ejemplo de pandas, donde podrán revisar operaciones básicas y algunos consejos:</p>

      <p>
        <a
          href="https://github.com/dpalmasan/homepage/blob/master/notebooks/intro_python/Ejemplo%20Pandas%20Intro%20Python.ipynb"
          target="_blank"
          rel="noopener noreferrer"
        >Ver ejemplo de pandas</a>
      </p>

      <h2>Ejercicios</h2>
      <h3>Ejercicio 1</h3>
      <p>Escriba, utilizando comprensiones de lista una función que genere los números pares desde 2 hasta n, donde n es un argumento de la función.</p>

      <h3>Ejercicio 2</h3>
      <p>Escriba una función que dada una lista de <code>float</code> entregue la desviación estándar de la muestra.</p>

      <h3>Ejercicio 3</h3>
      <p>Escriba una función que dadas dos vectores representados como listas numéricas, calcule el coseno de dichos vectores.</p>

      <p>
        <MathJax math={
          `El coseno entre dos vectores $u$ y $v$ puede calcularse como:

          $$cos(u, v) = \\frac{u\\cdot v}{\\|u\\|\\|v\\|}$$

          Donde $u\\cdot v = \\sum_{i=0}^{n - 1} u_iv_i$ y para un vector $x$ arbitrario $\\|x\\| = \\sqrt{\\sum_{i=0}^{n-1} x_i^2}$. Notar que para 
          las componentes del vector, utilizamos los índices desde $0$ hasta $n-1$ para coincidir con las listas. Para implementar el coseno puede 
          implementar 3 funciones: <code>producto_punto(u, v)</code>, <code>norma(x)</code> y utilizando estas dos funciones, puede 
          implementar la función <code>coseno(u, v)</code>. 
          `} />
      </p>

      <p><b>Voy a agregar más ejercicios simples de repaso, sigo buscando.</b></p>

      <h2>Ejercicios avanzados</h2>
      <h3>Pregunta 1</h3>
      <p>Un número feliz, es un número que lleva a 1 luego de aplicarle una secuencia de pasos, en las cuales en cada paso, el número
      es reemplazado por la suma de los cuadrados de sus dígitos, es decir, si seguimos haciendo este reemplazo, eventualmente llegaremos
      a 1. Por ejemplo, 19 es un número feliz, ya que:</p>

      <ul>
        <li><code>1^2 + 9^2 = 82</code></li>
        <li><code>8^2 + 2^2 = 68</code></li>
        <li><code>6^2 + 8^2 = 100</code></li>
        <li><code>1^2 + 0^2 + 0^2= 1</code></li>
      </ul>

      Por otro lado, 20 no es un número feliz, ya que:

      <ul>
        <li><code>2^2 + 0^2 = 4</code></li>
        <li><code>4^2 = 16</code></li>
        <li><code>1^2 + 6^2 = 37</code></li>
        <li><code>3^2 + 7^2= 58</code></li>
        <li><code>5^2 + 8^2= 89</code></li>
        <li><code>8^2 + 9^2= 145</code></li>
        <li><code>1^2 + 4^2 + 5^2= 42</code></li>
        <li><code>4^2 + 2^2 = 20</code></li>
      </ul>

      <p>Escriba una función que reciba un número como argumento de entrada y retorne <code>True</code> si el número es feliz y <code>False</code> en
      caso contrario.</p>

      <h3>Pregunta 2</h3>

      <p>Dado un <code>string</code>, excriba una función que ordene el string de acuerdo a la frecuencia de cada caracter, en orden
      ascendente. Si dos elementos tienen la misma frecuencia, se considera el orden lexicográfico. Por ejemplo, considere el
      string <code>halalelluejah</code> debe ser ordenado como <code>llllaaahheeuj</code>, si el string es <code>aaaabeebccccc</code> debe
      ser ordenado como <code>cccccaaaabbee</code>.</p>

      <h3>Pregunta 3</h3>

      <p>Implemente una función que dada una lista de enteros, retorne la máxima diferencia entre dos elementos de la lista, tal que
      el elemento mayor aparezca después del elemento menor en la lista (es decir si <code>maxdiff = lista[j] - lista[i], j &gt; i</code>) Analice la
      complejidad asintótica de su algoritmo</p>
      <MathJax math={
        `Tip: Una solución simple puede ser implementada en $O(n^2)$, implemente y justifique. ¿Puede resolver este problema en $O(n)$? 
        Implemente un algoritmo en caso afirmativo. ¿Puede resolverse en $O(1)$? Justifique su respuesta.
          `} />

    </div>
  )
}

export default withLayout(WeekThree);