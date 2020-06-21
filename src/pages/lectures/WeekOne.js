import React from "react";
import { useState } from 'react';
import withLayout from "../../components/withLayout";
import MathJax from 'react-mathjax-preview';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Button from 'react-bootstrap/Button';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from "react-router-dom";


function WeekOne() {

  const [showSol1, setLoadingSol1] = useState(false);


  const handleClickSol1 = () => setLoadingSol1(!showSol1);
  const styles = {
    container: {
      transition: "max-height .2s ease, opacity 1s ease",
      margin: "16px 0"
    },
    expanded: {
      visibility: "visible",
      maxHeight: 100,
      opacity: 1
    },
    hidden: {
      visibility: "hidden",
      maxHeight: 0,
      opacity: 0
    }
  };


  return (
    <div className='container'>
      <h1 className='mt-5'>Semana 1</h1>
      <p className='lead'>
        Para aprovechar el tiempo de sobra de la semana 1, se dejan ejercicios para que puedan practicar lo
        aprendido en las sesiones no presenciales (fuera de clases). Por otro lado, también dejaré una explicación de conceptos
        básicos, para que logren aclarar su entendimiento respecto a programación en general.
            </p>

      <h2>¿Qué es un programa?</h2>
      <p>Definir qué es un <b>programa</b> se puede hacer de múltiples formas dependiendo del grado de detalle que uno quiera considerar.
      Sin embargo, la intuición que debe entenderse por program es: <em>Un programa es un conjunto de instrucciones de máquina para llevar a cabo una
      tarea definida.</em>. Probablemente, en su uso cotidiano de computadores, han utilizado diversos programas (ej. Microsoft Word, Google Chrome, etc.).
      Sin embargo, todos estos programas tienen una <em>interfaz de usuario</em> lo que nos aleja un poco de lo que veremos a lo largo del curso. Para
      tener una intuición más acercada a los programas que desarrollaremos en el curso, tomemos como ejemplo el programa <code>ping</code>. El
      programa <code>ping</code> en términos simples envía secuencias de bytes a un sitio definido y mide el tiempo de promedio de respuesta del sitio.
      En <code>Windows</code> por ejemplo pueden hacer, en la terminal pueden hacer:</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          ">ping www.google.com\n"
          + "\n"
          + "Haciendo ping a www.google.com [172.217.192.105] con 32 bytes de datos:\n"
          + "Respuesta desde 172.217.192.105: bytes=32 tiempo=41ms TTL=107\n"
          + "Respuesta desde 172.217.192.105: bytes=32 tiempo=18ms TTL=107\n"
          + "Respuesta desde 172.217.192.105: bytes=32 tiempo=35ms TTL=107\n"
          + "Respuesta desde 172.217.192.105: bytes=32 tiempo=21ms TTL=107\n"
          + "\n"
          + "Estadísticas de ping para 172.217.192.105:\n"
          + "    Paquetes: enviados = 4, recibidos = 4, perdidos = 0\n"
          + "    (0% perdidos),\n"
          + "Tiempos aproximados de ida y vuelta en milisegundos:\n"
          + "    Mínimo = 18ms, Máximo = 41ms, Media = 28ms"
        }
      </SyntaxHighlighter>

      En <code>UNIX (MacOS, Linux)</code> también existe el programa <code>ping</code>, pero este se ejecuta indefinidamente hasta que
      el usuario lo interrumpa (con <code>Ctrl + C</code>):

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "ping www.google.com\n"
          + "PING www.google.com (64.233.190.103) 56(84) bytes of data.\n"
          + "64 bytes from gsademo22.google.com (64.233.190.103): icmp_seq=1 ttl=107 time=39.8 ms\n"
          + "64 bytes from gsademo22.google.com (64.233.190.103): icmp_seq=2 ttl=107 time=17.6 ms\n"
          + "64 bytes from gsademo22.google.com (64.233.190.103): icmp_seq=3 ttl=107 time=28.0 ms\n"
          + "64 bytes from gsademo22.google.com (64.233.190.103): icmp_seq=4 ttl=107 time=31.0 ms\n"
          + "^C\n"
          + "--- www.google.com ping statistics ---\n"
          + "4 packets transmitted, 4 received, 0% packet loss, time 3002ms\n"
          + "rtt min/avg/max/mdev = 17.614/29.132/39.880/7.957 ms"
        }
      </SyntaxHighlighter>

      <p>Como podrán imaginarse, los programas en general tienen múltiples funcionalidades, incluso los programas más simples. Supongamos
      que el promedio de 4 paquetes enviados por ping no me da un número representativo para la latencia en milisegundos que observo al usar
      internet. La pregunta es ¿viene el programa <code>ping</code> dotado de la capacidad de controlar la cantidad de bytes enviados
      para calcular la latencia en milisegundos? Aquí es donde entran los <b>argumentos de línea de comandos</b>, que son básicamente
      "palancas" que nos permiten modificar o ajustar el comportamiento de nuestro programa. Volvamos a correr el programa pero considerando el
      envío de 10 paquetes de bytes. En <code>Windows</code>:</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          ">ping /n 10 www.google.com\n"
          + "\n"
          + "Haciendo ping a www.google.com [64.233.190.104] con 32 bytes de datos:\n"
          + "Respuesta desde 64.233.190.104: bytes=32 tiempo=130ms TTL=107\n"
          + "Respuesta desde 64.233.190.104: bytes=32 tiempo=39ms TTL=107\n"
          + "Respuesta desde 64.233.190.104: bytes=32 tiempo=198ms TTL=107\n"
          + "Respuesta desde 64.233.190.104: bytes=32 tiempo=21ms TTL=107\n"
          + "Respuesta desde 64.233.190.104: bytes=32 tiempo=30ms TTL=107\n"
          + "Respuesta desde 64.233.190.104: bytes=32 tiempo=16ms TTL=107\n"
          + "Respuesta desde 64.233.190.104: bytes=32 tiempo=31ms TTL=107\n"
          + "Respuesta desde 64.233.190.104: bytes=32 tiempo=13ms TTL=107\n"
          + "Respuesta desde 64.233.190.104: bytes=32 tiempo=68ms TTL=107\n"
          + "Respuesta desde 64.233.190.104: bytes=32 tiempo=15ms TTL=107\n"
          + "\n"
          + "Estadísticas de ping para 64.233.190.104:\n"
          + "    Paquetes: enviados = 10, recibidos = 10, perdidos = 0\n"
          + "    (0% perdidos),\n"
          + "Tiempos aproximados de ida y vuelta en milisegundos:\n"
          + "    Mínimo = 13ms, Máximo = 198ms, Media = 56ms"
        }
      </SyntaxHighlighter>

      En <code>UNIX (MacOS, Linux):</code>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "> ping -c 10 www.google.com\n"
          + "PING www.google.com (64.233.190.105) 56(84) bytes of data.\n"
          + "64 bytes from gsademo24.google.com (64.233.190.105): icmp_seq=1 ttl=107 time=33.5 ms\n"
          + "64 bytes from gsademo24.google.com (64.233.190.105): icmp_seq=2 ttl=107 time=19.3 ms\n"
          + "64 bytes from gsademo24.google.com (64.233.190.105): icmp_seq=3 ttl=107 time=273 ms\n"
          + "64 bytes from gsademo24.google.com (64.233.190.105): icmp_seq=4 ttl=107 time=83.4 ms\n"
          + "64 bytes from gsademo24.google.com (64.233.190.105): icmp_seq=5 ttl=107 time=34.9 ms\n"
          + "64 bytes from gsademo24.google.com (64.233.190.105): icmp_seq=6 ttl=107 time=23.6 ms\n"
          + "64 bytes from gsademo24.google.com (64.233.190.105): icmp_seq=7 ttl=107 time=31.2 ms\n"
          + "64 bytes from gsademo24.google.com (64.233.190.105): icmp_seq=8 ttl=107 time=99.6 ms\n"
          + "64 bytes from gsademo24.google.com (64.233.190.105): icmp_seq=9 ttl=107 time=19.8 ms\n"
          + "64 bytes from gsademo24.google.com (64.233.190.105): icmp_seq=10 ttl=107 time=39.8 ms\n"
          + "\n"
          + "--- www.google.com ping statistics ---\n"
          + "10 packets transmitted, 10 received, 0% packet loss, time 9008ms\n"
          + "rtt min/avg/max/mdev = 19.301/65.915/273.775/73.904 ms"
        }
      </SyntaxHighlighter>

      <p>Cambiamos el comportamiento del programa, diciéndole que en lugar de enviar paquetes de bytes con las opciones por defecto
      enviara <code>10</code> paquetes de bytes. Notar también que el sitio al que queremos hacer <code>ping</code> también es un
      argumento para el programa, y en los ejemplos usamos <code>www.google.com</code>. <b>¿Podremos hacer algo similar en <code>Python</code>?</b> Aquí
      es done entra el módulo <code>sys</code> y en particular <code>argv</code>. Consideremos el siguiente programa de ejemplo
      llamado <code>ejemplo_argv.py</code>:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "import sys\n"
          + "\n"
          + "\n"
          + "print(sys.argv)\n"

        }
      </SyntaxHighlighter>

      <p>Utilizando python para ejecutar el programa, por ejemplo <code>python ejemplo_argv.py</code>, va a mostrar en la termina el siguiente
      texto: <code>['ejemplo_argv.py']</code>. Prueben correr el programa con distintos argumentos, por
      ejemplo: <code>python ejemplo_argv.py hola esto es un ejemplo de argumentos al programa</code>, esto mostrará en la terminal lo siguiente:
      <code>['ejemplo_argv.py', 'hola', 'esto', 'es', 'un', 'ejemplo', 'de', 'argumentos', 'al', 'programa']</code>. Básicamente <code>argv</code> es
      una <em>lista de cadenas de texto</em> (<code>string</code>), <b>donde el primer elemento es el nombre del archivo que contiene el código</b> (programa).
      Esto lo <b>deberán entender mejor cuando vean sus sesiones online</b> de la semana de
      Introducción a Python. ¿Cómo utilizar los argumentos? Para acceder a los elementos de la lista, se utiliza lo que se conoce como indexación.
      En <code>python</code> en particular, los índices comienzan del 0. Por lo que, si quisieran acceder al primer elemento de dicha lista, se hace
      mediante <code>sys.argv[0]</code>. La sintaxis <code>lista[i]</code> es acceder al elemento <code>i</code>-ésimo de la <code>lista</code>. Finalmente
      se deja un ejemplo de programa que saluda al usuario dado un nombre:</p>.

      <SyntaxHighlighter language="python" style={docco}>
        {
          "import sys\n"
          + "\n"
          + "\n"
          + "nombre = sys.argv[1]\n"
          + "print(f\"Hola {nombre}!\")\n"

        }
      </SyntaxHighlighter>

      <p>Si nombramos el archivo como <code>ejemplo_argv.py</code> y lo ejecutamos vía <code>python ejemplo_argv.py Diego</code>, el programa mostará
      lo siguiente: <code>Hola Diego!</code>.</p>

      <h2>Ejercicios</h2>
      <h3>Ejercicio 1</h3>

      <p>Escriba un programa que lea un entero positivo <code>n</code>, ingresado por usuario y e imprima la suma de
      los números desde <code>1</code> a <code>n</code>. Para calcular la sumatoria <code>1 + 2 + 3 + ... n</code> puede
      utilizar la siguiente fórmula:</p>

      <MathJax math={`$$Suma = \\frac{n\\left(n + 1\\right)}{2}$$`} />

      <p>Escriba dos versiones del programa, una que lea la entrada con la función <code>input</code> y otra que sea por <code>argv</code>.</p>

      <h3>Ejercicio 2</h3>
      <p>Mucha gente en otros países mide su estatura utilizando pies y pulgadas, en Chile utilizamos los metros como unidad. Escriba un programa
      que lea una medición en pies y número de pulgadas, ambos entregados por el usuario. El programa debe transformar la medición a
      centímetros. <b>Pista:</b> Un pie son 12 pulgadas. Una pulgada son 2.54 cm.</p>

      <h3>Ejercicio 3</h3>
      <p>Escriba un programa que reciba como entradas <code>3</code> enteros. El programa debe imprimir en pantalla los 3 enteros ordenados
      en forma creciente. <b>Pista</b>: Puede encontrar el mínimo valor usando la función <code>min</code> y el máximo usando <code>max</code>. ¿Cómo
      podría encontrar el valor faltante?</p>

      <h2>Soluciones</h2>
      <Button variant="primary" onClick={handleClickSol1}>
        {(showSol1) ? "Ocultar solución Ejercicio 1" : "Mostrar Solución Ejercicio 1"}
      </Button>

      <div
        style={{
          ...styles.container,
          ...(showSol1 ? styles.expanded : styles.hidden)
        }}

      >
        <p>Si usamos <code>input</code>, se debe recordar que <code>Python</code> guardará la entrada por teclado como variable de
            tipo <code>string</code> (cadena de texto). Por lo tanto, se deberá transformar a <code>int</code>. Por ahora, asumiremos que
            el usuario ingresará un número entero. Luego, se puede caclular la suma, utilizando la fórmula y usamos la función <code>print</code> para
            mostrar el resultado.</p>

        <p>Si su código se ve como sigue: </p>
        <SyntaxHighlighter language="python" style={docco}>
          {
            "n=int(input(\"Ingrese valor de n: \"))\n"
            + "suma=n*(n+1)/2\n"
            + "print(f\"El valor para n = {n} es {suma}\")"
          }
        </SyntaxHighlighter>

        <p>Ruego encarecidamente que vean "<Link to="python_misc">Escribir buen código en python</Link>". Idealmente quieren correr el
            formateador de código <code>black</code> y el chequeador de estándar <code>PEP8</code> <code>flake8</code>. Finalmente, el código
            se vería como sigue:</p>

        <SyntaxHighlighter language="python" style={docco}>
          {
            "n = int(input(\"Ingrese valor de n: \"))\n"
            + "suma = n * (n + 1) / 2\n"
            + "print(f\"El valor para n = {n} es {suma}\")"

          }
        </SyntaxHighlighter>

        <p>De esta forma, el código será más legible para mí, para ustedes, e irá acorde con estándares de código.</p>
      </div>

    </div>
  )
}

export default withLayout(WeekOne);