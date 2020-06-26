import React from "react";
import withLayout from "../../components/withLayout";
import MathJax from 'react-mathjax-preview';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SolutionButton from '../../components/SolutionButton';


function solEx1() {
  return (
    <div>
      <SyntaxHighlighter language="python" style={docco}>
        {
          "\"\"\"Solución Ejercicio 1.\n"
          + "\n"
          + "Desafío Latam: Introducción a Python 2020\n"
          + "\"\"\"\n"
          + "import sys\n"
          + "\n"
          + "\n"
          + "deposito = float(sys.argv[1])\n"
          + "\n"
          + "# 4% de interés anual\n"
          + "intereses = 1.04\n"
          + "\n"
          + "balance = intereses * deposito\n"
          + "print(f\"El balance al año 1 es: {round(balance, 2)}\")\n"
          + "\n"
          + "balance = intereses * balance\n"
          + "print(f\"El balance al año 2 es: {round(balance, 2)}\")\n"
          + "\n"
          + "balance = intereses * balance\n"
          + "print(f\"El balance al año 3 es: {round(balance, 2)}\")\n"
        }
      </SyntaxHighlighter>

      <p>Por ejemplo, <code>python ejercicio1.py 1000</code></p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "> python ejemplo_argv.py 1000\n"
          + "El balance al año 1 es: 1040.0\n"
          + "El balance al año 2 es: 1081.6\n"
          + "El balance al año 3 es: 1124.86"
        }
      </SyntaxHighlighter>

    </div>
  )
}

function solEx3() {
  return (
    <div>
      <SyntaxHighlighter language="python" style={docco}>
        {
          "\"\"\"Solución Ejercicio 3.\n"
          + "\n"
          + "Desafío Latam: Introducción a Python 2020\n"
          + "\"\"\"\n"
          + "import sys\n"
          + "\n"
          + "\n"
          + "# Se asumirá que peso y altura son ingresados en kg y m respectivamente\n"
          + "peso = float(sys.argv[1])\n"
          + "altura = float(sys.argv[2])\n"
          + "\n"
          + "imc = round(peso / altura ** 2, 2)\n"
          + "\n"
          + "print(f\"Su IMC es: {imc}\")\n"
        }
      </SyntaxHighlighter>
    </div>
  )
}


function solEx5() {
  return (
    <div>
      <SyntaxHighlighter language="python" style={docco}>
        {
          "\"\"\"Solución Ejercicio 5.\n"
          + "\n"
          + "Desafío Latam: Introducción a Python 2020\n"
          + "\"\"\"\n"
          + "import sys\n"
          + "\n"
          + "\n"
          + "n = int(sys.argv[1])\n"
          + "\n"
          + "unidades = n % 10\n"
          + "decenas = (n // 10) % 10\n"
          + "centenas = (n // 100) % 10\n"
          + "millares = (n // 1000) % 10\n"
          + "suma = unidades + decenas + centenas + millares\n"
          + "\n"
          + "print(f\"Su número {n}: {millares} + {centenas} + {decenas} + {unidades}\")\n"
          + "print(f\"La suma es {suma}\")\n"
        }
      </SyntaxHighlighter>
    </div>
  )
}


function solEx7() {
  return (
    <div>
      <SyntaxHighlighter language="python" style={docco}>
        {
          "\"\"\"Solución Ejercicio 7.\n"
          + "\n"
          + "Desafío Latam: Introducción a Python 2020\n"
          + "\"\"\"\n"
          + "import sys\n"
          + "\n"
          + "\n"
          + "mes = sys.argv[1].lower()\n"
          + "\n"
          + "tiene_30_dias = (\n"
          + "    mes == \"abril\" or mes == \"junio\" or mes == \"septiembre\" or mes == \"noviembre\"\n"
          + ")\n"
          + "\n"
          + "tiene_31_dias = (\n"
          + "    mes == \"enero\"\n"
          + "    or mes == \"marzo\"\n"
          + "    or mes == \"mayo\"\n"
          + "    or mes == \"julio\"\n"
          + "    or mes == \"agosto\"\n"
          + "    or mes == \"octubre\"\n"
          + "    or mes == \"diciembre\"\n"
          + ")\n"
          + "\n"
          + "if tiene_30_dias:\n"
          + "    print(f\"{mes.capitalize()} tiene 30 dias\")\n"
          + "elif tiene_31_dias:\n"
          + "    print(f\"{mes.capitalize()} tiene 31 dias\")\n"
          + "elif mes == \"febrero\":\n"
          + "    print(f\"{mes.capitalize()} tiene 28 o 29 dias\")\n"
          + "else:\n"
          + "    print(f\"{mes.capitalize()} no es un mes válido\")\n"
        }
      </SyntaxHighlighter>
    </div>
  )
}

function solEx9() {
  return (
    <div>
      <SyntaxHighlighter language="python" style={docco}>
        {
          "\"\"\"Solución Ejercicio 9.\n"
          + "\n"
          + "Desafío Latam: Introducción a Python 2020\n"
          + "\"\"\"\n"
          + "import sys\n"
          + "\n"
          + "\n"
          + "casilla = sys.argv[1]\n"
          + "\n"
          + "# Filas empiezan desde 1 siguiendo la numeración del cuadro\n"
          + "fila = int(casilla[1])\n"
          + "\n"
          + "# Columnas empezaran desde 0, pues le restamos el valor del caracter 'a'\n"
          + "# que es 97 (también se podría implementar con varios ifs)\n"
          + "columna = ord(casilla[0]) - ord(\"a\")\n"
          + "\n"
          + "fila_par = fila % 2 == 0\n"
          + "columna_par = columna % 2 == 0\n"
          + "\n"
          + "if not fila_par:\n"
          + "    if columna_par:\n"
          + "        color = \"negro\"\n"
          + "    else:\n"
          + "        color = \"blanco\"\n"
          + "else:\n"
          + "    if columna_par:\n"
          + "        color = \"blanco\"\n"
          + "    else:\n"
          + "        color = \"negro\"\n"
          + "\n"
          + "print(f\"La casilla {casilla} es de color {color}\")\n"

        }
      </SyntaxHighlighter>

      <p>Ejemplo de usos:</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          ">python ejemplo_argv.py h8\n"
          + "La casilla h8 es de color negro\n"
          + ">python ejemplo_argv.py c7\n"
          + "La casilla c7 es de color negro\n"
          + ">python ejemplo_argv.py c6\n"
          + "La casilla c6 es de color blanco\n"
          + ">python ejemplo_argv.py b1\n"
          + "La casilla b1 es de color blanco\n"
          + ">python ejemplo_argv.py b2\n"
          + "La casilla b2 es de color negro\n"
          + ">python ejemplo_argv.py b3\n"
          + "La casilla b3 es de color blanco\n"
        }
      </SyntaxHighlighter>
    </div>
  )
}


function WeekOneRepaso() {

  return (
    <div className='container'>
      <h1 className='mt-5'>Introducción a Python: Ejercicios Repaso</h1>
      <p className='lead'>
        Con la finalidad de que todos estén entendiendo la materia y que nadie se "pierda" en el camino, se deja un conjunto de ejercicios
        de repaso. La idea es que "suelten la mano" y vayan acostumbrándose a escribir código y a las características del lenguaje de
        programación <code>python</code>.
            </p>

      <h2>Ejercicios</h2>
      <h3>Ejercicio 1</h3>

      <p>Supongamos que has abierto una nueva cuenta de ahorro que te da una ganancia de 4 % de interés anual. Los intereses ganados
      se pagan al final de cada año y se agregan al balance de la cuenta de ahorro. Escribe un progama que lea la cantidad de dinero
      depositada en la cuenta inicialmente. El programa debe calcular y mostrar el balance de la cuenta de ahorros luego de 1, 2 y 3
      años. Mostrar cada cantidad redondeada al segundo decimal (puede buscar la función <code>round</code>).</p>

      <SolutionButton sol={solEx1}></SolutionButton>

      <h3>Ejercicio 2</h3>
      <p>La ley de los gases ideales es una aproximación matemática del comportamiento de los gases cuando la presión, volumen y temperatura
      cambian. Normalmente se escribe como:</p>

      <MathJax math={`$$PV = nRT$$`} />

      <p>
        <MathJax math={
          `Donde $P$ es la presión en Pascales, $V$ es el volumen en litros, $n$  es
        la cantidad de sustancia en moles, $R$ es la constante de los gases ideales, igual
        a $8.314 \\frac{J}{molK}$, y $T$ es la temperatura en Kelvin.`} />
      </p>

      <p>Escriba un programa que calcule la cantidad de gas en moles dadas la presión, el volumen y la temperatura.</p>

      <h3>Ejercicio 3</h3>
      <p>Escriba un programa calcule el índice de masa corporal (IMC) de una persona, este puede ser calculado como:</p>

      <MathJax math={`$$IMC = \\frac{Peso}{altura^2}$$`} />

      <p>El programa debe recibir el peso (kg) y la estatura (m) de la persona.</p>

      <SolutionButton sol={solEx3}></SolutionButton>

      <h3>Ejercicio 4</h3>
      <p>Escriba un programa que dada una temperatura en grados Celsius, muestre la temperatura en grandos Farenheit y en Kelvin. Las
      fórmulas de transformación las puede encontrar en internet. Para probar su programa, puede tomar como ejemplo, que 25 grados
      celsius son aproximadamente 77 Farenheit y 298 K. </p>

      <h3>Ejercicio 5</h3>
      <p>Escriba un programa que lea un entero de 4 dígitos y muestre la suma de los dígitos del número. Por ejemplo, si el usuario
      ingresa 3141, entonces el programa debiese mostrar <code>3 + 1 + 4 + 1 = 9</code>. Por ahora asuma que siempre serán 4 dígitos. Queda
      como pregunta ¿Cómo podría generalizar para cualquier cantidad de dígitos?</p>

      <SolutionButton sol={solEx5}></SolutionButton>

      <h3>Ejercicio 6</h3>
      <p>Escriba un programa que lea un entero. El programa deberá mostrar si el número ingresado es par o impar.</p>

      <h3>Ejercicio 7</h3>
      <p>Escriba un programa que dado el nombre de un mes, imprima en pantalla la cantidad de días de dicho mes. En caso de que el mes
      sea febrero, su programa deberá imprimir <code>28 o 29 días</code>.</p>

      <SolutionButton sol={solEx7}></SolutionButton>

      <h3>Ejercicio 8</h3>
      <p>Los triángulos se clasifican en base al largo de sus lados como equilátero, isósceles o escaleno. En un triángulo equilátero
      los 3 lados tienen la misma longitud. En un triángulo isósceles, 2 lados tienen la misma longitud y el otro lado tiene una longitud
      diferente. En un triángulo escaleno todos los lados son de distinta longitud. Escriba un programa que dados los largos de los lados
      de un triángulo, diga si es equilátero, isósceles o escaleno. Su programa debe también chequear si el triángulo es válido (puede aplicar
      la desigualdad triángular para chequear esto).</p>

      <h3>Ejercicio 9</h3>
      <p>Las posiciones en un tablero de ajedrez se identifican con una letra y un número. La letra representa la columna, y el número la fila
      tal y como se muestra en la siguiente figura:</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={12}>
          <Image src={process.env.PUBLIC_URL + '/imgs/tablero.png'} fluid />
        </Col>
      </Row>

      <p>Escriba un programa que lea la posición de una casilla de un tablero de ajedrez y determine si es blanca o negra. Para simplificar el problema,
      se asumirá que el usuario ingresará una casilla válida, por lo que, no es necesario hacer chequear si la entrada es correcta o no.</p>

      <SolutionButton sol={solEx9}></SolutionButton>
      <h3>Ejercicio 10</h3>

      <p>La ruleta es un juego típico de casino. Consiste en una rueda de 38 espacios. De estos espacios, 18 son negros, 18 rojos y
      dos son verdes. Los espacios verdes estan etiquetados como 0 y 00. Los espacios rojos tienen los siguentes números: 1, 3, 5, 7, 9,
      12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34 y 36. El resto de los enteros entre 1 y 36 se usan para los espacios negros.</p>

      <p>Se pueden realizar diferentes apuestas. Para propósitos del ejercicios, consideraremos el siguiente subconjunto de apuestas:</p>

      <ul>
        <li>Número (1 a 36, 0 o 00)</li>
        <li>Rojo vs Negro</li>
        <li>Par vs Impar (en este caso 0 y 00 no produce ganancia si se apostó par)</li>
        <li>1 a 18 vs 19 a 36</li>
      </ul>

      <p>
        Escriba un programa que simule el giro de una ruleta. Muestre el espacio que fue escoglido y todas las apuestas ganadoras. Por ejemplo,
        si 13 es elegido, su programa debe mostrar:
      </p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "El giro de la ruleta terminó en 13\n"
          + "Pagar al 13\n"
          + "Pagar a color negro\n"
          + "Pagar a apuesta impar\n"
          + "Pagar a apuestas 1 a 18\n"

        }
      </SyntaxHighlighter>

      <p>Si la simulación termina en 0 o 00, el programa debe mostrar <code>Pagar a 0</code> o <code>Pagar a 00</code>, sin mostrar nada más.
      Ya que otras apuestas no ganan en este caso.</p>
    </div>
  )
}

export default withLayout(WeekOneRepaso);