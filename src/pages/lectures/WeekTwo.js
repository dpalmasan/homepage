import React from "react";
import withLayout from "../../components/withLayout";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function WeekTwo() {

  return (
    <div className='container'>
      <h1 className='mt-5'>Ciclos y Métodos: Ejercicios complementarios</h1>
      <p className='lead'>
        La semana 2 es de métodos y ciclos, se dejan ejercicios para repasar estas temáticas. Se mostrará un ejemplo de uso de funciones
        y ciclos, y técnicas generales para resolver problemas.</p>

      <h2>Ejemplo del Lector de mentes</h2>

      <p>En este ejemplo se implementará un lector de mentes. El usuario pensará un número del 1 al 100, y el computador intentará adivinar
      el número. El usuario le proporcionará al computador información sobre si el número adivinado es mayor o menor que el número que
      está pensando, en caso de que el computador haya errado en adivinar. El juego terminará una vez el computador adivine el número del
      usuario.</p>

      <p>Lo primero es pensar el problema y resolverlo mediante abstracción (sin programar). Al entender el problema, se podría pensar
      que sigue el siguiente flujo:</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4}>
          <Image src={process.env.PUBLIC_URL + '/imgs/flujo1.png'} fluid />
        </Col>
      </Row>

      <p>Lo mostrado en la figura anterior es un esqueleto del flujo que sigue el programa, donde muchos componentes fueron
      abstraídos. Saludar al usuario por ejemplo, es una abstracción y se puede implementar con una función, por ejemplo:</p>


      <SyntaxHighlighter language="python" style={docco}>
        {
          "def saludar():\n"
          + "    print(\"Bienvenido al lector de mente.\")\n"
          + "    print(\"Por favor piense en un número del 1 al 100\")\n"
        }
      </SyntaxHighlighter>

      <p>Se puede ver también que el juego no terminará hasta que la computadora no adivine el número. Sin embargo, ¿cómo se podría implementar
      esa lógica? Se debe entrar al detalle de la abstracción, descomponiendo el problema en un sub-problema:</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/flujo2.png'} fluid />
        </Col>
      </Row>

      <p>El problema de adivinar, se puede implementar de la siguiente forma:</p>
      <ol>
        <li>Inicialmente, el computador sabe que el usuario está pensando un número entre <code>1</code> y <code>100</code>.</li>
        <li>Por lo tanto, lo natural, sería adivinar un número entre medio (entero) <code>(1 + 100)/2 = 50.5</code>, por lo tanto <code>50</code></li>
        <li>Si el usuario dice que el número es mayor, entonces sabemos que no está entre <code>1</code> y <code>50</code> y podemos
        inferir que el número estará entre <code>50</code> y <code>100</code>. Con estos límites volvemos al paso 1.</li>
        <li>En caso de que el computador adivine terminamos el juego.</li>
      </ol>

      <p>Por otro lado, mostrar menú también es una abstracción, y se podría implementar en una función <code>mostrar_menu</code>:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "def mostrar_menu(num):\n"
          + "    print(f\"Adivino que el número que está pensando es: {num}\")\n"
          + "    print(\"Elija una opción\")\n"
          + "    print(\"1. El número que estoy pensando es mayor\")\n"
          + "    print(\"2. El número que estoy pensando es menor\")\n"
          + "    print(\"3. ¡Ese es mi número! Bravo!!!\")\n"
        }
      </SyntaxHighlighter>

      <p>Finalmente, podemos ir más al detalle, y definir un flujo para <b>leer opción</b>:</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={8} md={8}>
          <Image src={process.env.PUBLIC_URL + '/imgs/flujo3.png'} fluid />
        </Col>
      </Row>

      <p>Del diagrama de flujo, esto puede implementarse como:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "def leer_opcion():\n"
          + "  escogiendo = True\n"
          + "\n"
          + "  while escogiendo:\n"
          + "      opcion = input(\"Ingrese su opción: \")\n"
          + "      if opcion != \"1\" and opcion != \"2\" and opcion != \"3\":\n"
          + "          print(\"Opcion inválida.\")\n"
          + "      else:\n"
          + "          escogiendo = False\n"
          + "\n"
          + "  return int(opcion)\n"
        }
      </SyntaxHighlighter>

      <p>Luego, es cosa de juntar todos los subproblemas que resolvimos, para resolver el problema principal. Lo que
      resultaría en:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "def saludar():\n"
          + "    print(\"Bienvenido al lector de mente.\")\n"
          + "    print(\"Por favor piense en un número del 1 al 100\")\n"
          + "\n"
          + "\n"
          + "def adivinar(inferior, superior):\n"
          + "    return (inferior + superior) // 2\n"
          + "\n"
          + "\n"
          + "def mostrar_menu(num):\n"
          + "    print(f\"Adivino que el número que está pensando es: {num}\")\n"
          + "    print(\"Elija una opción\")\n"
          + "    print(\"1. El número que estoy pensando es mayor\")\n"
          + "    print(\"2. El número que estoy pensando es menor\")\n"
          + "    print(\"3. ¡Ese es mi número! Bravo!!!\")\n"
          + "\n"
          + "\n"
          + "def leer_opcion():\n"
          + "    escogiendo = True\n"
          + "\n"
          + "    while escogiendo:\n"
          + "        opcion = input(\"Ingrese su opción: \")\n"
          + "        if opcion != \"1\" and opcion != \"2\" and opcion != \"3\":\n"
          + "            print(\"Opcion inválida.\")\n"
          + "        else:\n"
          + "            escogiendo = False\n"
          + "\n"
          + "    return int(opcion)\n"
          + "\n"
          + "\n"
          + "saludar()\n"
          + "\n"
          + "juego_continua = True\n"
          + "inf = 1\n"
          + "sup = 100\n"
          + "intentos = 0\n"
          + "while juego_continua:\n"
          + "    num = adivinar(inf, sup)\n"
          + "    intentos += 1\n"
          + "    mostrar_menu(num)\n"
          + "    opcion = leer_opcion()\n"
          + "    if opcion == 1:\n"
          + "        inf = num\n"
          + "    elif opcion == 2:\n"
          + "        sup = num\n"
          + "    else:\n"
          + "        juego_continua = False\n"
          + "\n"
          + "print(f\"El adivinador adivinó su número {num} en {intentos} intentos\")\n"
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          ">python adivina.py\n"
          + "Bienvenido al lector de mente.\n"
          + "Por favor piense en un número del 1 al 100    \n"
          + "Adivino que el número que está pensando es: 50\n"
          + "Elija una opción\n"
          + "1. El número que estoy pensando es mayor      \n"
          + "2. El número que estoy pensando es menor      \n"
          + "3. ¡Ese es mi número! Bravo!!!\n"
          + "Ingrese su opción: 1\n"
          + "Adivino que el número que está pensando es: 75\n"
          + "Elija una opción\n"
          + "1. El número que estoy pensando es mayor      \n"
          + "2. El número que estoy pensando es menor      \n"
          + "3. ¡Ese es mi número! Bravo!!!\n"
          + "Ingrese su opción: 1\n"
          + "Adivino que el número que está pensando es: 87\n"
          + "Elija una opción\n"
          + "1. El número que estoy pensando es mayor\n"
          + "2. El número que estoy pensando es menor\n"
          + "3. ¡Ese es mi número! Bravo!!!\n"
          + "Ingrese su opción: 2\n"
          + "Adivino que el número que está pensando es: 81\n"
          + "Elija una opción\n"
          + "1. El número que estoy pensando es mayor\n"
          + "2. El número que estoy pensando es menor\n"
          + "3. ¡Ese es mi número! Bravo!!!\n"
          + "Ingrese su opción: 2\n"
          + "Adivino que el número que está pensando es: 78\n"
          + "Elija una opción\n"
          + "1. El número que estoy pensando es mayor\n"
          + "2. El número que estoy pensando es menor\n"
          + "3. ¡Ese es mi número! Bravo!!!\n"
          + "Ingrese su opción: 1\n"
          + "Adivino que el número que está pensando es: 79\n"
          + "Elija una opción\n"
          + "1. El número que estoy pensando es mayor\n"
          + "2. El número que estoy pensando es menor\n"
          + "3. ¡Ese es mi número! Bravo!!!\n"
          + "Ingrese su opción: 3\n"
          + "El adivinador adivinó su número 79 en 6 intentos\n"
        }
      </SyntaxHighlighter>


      <h2>Ejercicios</h2>
      <h3>Ejercicio 1</h3>

      <p>Escriba un programa que calcule el perímetro de un polígono. Comience leyendo los valores de las coordenadas <code>x</code> e <code>y</code> del
      primer punto en el perímetro del polígono. Luego, continúe leyendo pares <code>x</code> e <code>y</code> hasta que el usuario ingrese una
      línea vacía para la coordenada <code>x</code>. Cada vez que se lea una coordenada, se debe calcular la distancia al punto previo y
      acumularla en el perímetro. Cuando el usuario ingresa una línea vacía, tu programa deberá sumar la distancia entre el último punto
      y el primer punto del perímetro. Luego, debería mostrar el perímetro total. Un ejemplo de entrada y salida se muestra abajo:</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "Ingrese la coordenada x: 0\n"
          + "Ingrese la coordenada y: 0\n"
          + "Ingrese la coordenada x (vacía si quiere salir): 1\n"
          + "Ingrese la coordenada y: 0\n"
          + "Ingrese la coordenada x (vacía si quiere salir): 0\n"
          + "Ingrese la coordenada y: 1\n"
          + "Ingrese la coordenada x (vacía si quiere salir):\n"
          + "El perímetro del polígono es 3.414213562373095\n"
        }
      </SyntaxHighlighter>

      <h3>Ejercicio 2</h3>
      <p>
        En el zológico "Animalitos Felices" el precio de la entrada depende de la edad del visitante. Los visitantes que tengan una edad
        de dos años o menos no pagan. Los niños entre 3 y 12 años pagan 7000 pesos. Las personas de 65 años y mayores pagan 9000 pesos. El
        resto de las visitas paga 11500 pesos para entrar.

        Escriba un programa que comience leyendo las edades de todos los visitantes de un grupo, una edad por línea. Si el usuario ingresa una
        línea vacía, significará que no hay más visitantes en el grupo. Finalmente, el programa deberá mostrar el costo de admisión del grupo.
      </p>

      <h3>Ejercicio 3</h3>

      <p>
        Un bit de paridad es un mecanismo para detectar errores en datos transmitidos por una conexión de baja confiabilidad, como por ejemplo
        una línea telefónica. La idea es que un bit adicional se transmite luego de transmitir un grupo de 8 bits, de manera de que un error en un
        bit pueda ser detectado.

        Los bits de paridad se pueden calcular para paridad par o impar. Si se escoge paridad par, el bit de paridad se escoge de manera
        de que el número total de bits con valor 1 transmitidos (8 bits de datos más el bit de paridad) sea par. Por otro lado, cuando se escoge
        paridad impar, el bit de paridad se escoge de manera de que la cantidad de 1s transmitidos sea impar.

        Escriba un programa que calcule el bit de paridad para grupos de 8 bits ingresados por usuario, considerando paridad par. El programa debiese
        leer <code>strings</code> que contengan 8 bits hasta que se ingrese una línea vacía. Después de que cada <code>string</code> se ingresa, el programa
        debe indicar si el bit de paridad es 0 o 1. Muestre un mensaje de error apropiado si el usuario ingresa un string que sea algo distinto
        de 8 bits. Puede usar la función <code>count</code> para resolver este problema (leer la documentación).
      </p>

      <h3>Ejercicio 4</h3>
      <p>
        Un string es palíndromo si al escribirlo de forma inversa es idéntico al string original. Por ejemplo los string <code>ana</code>,
        <code>acurruca</code>, <code>Amargor pleno con el programa</code> son palíndromos. Escriba un programa que lea un string entregado por
        el usuario y diga si es palíndromo o no.
      </p>

      <h3>Ejercicio 5</h3>

      <p>
        Un número primo es un entero mayor que 1 que es divisible únicamente por 1 y por sí mismo. Escriba una función que reciba
        un entero como entrada y retorne <code>True</code> si el número es primo y <code>False</code> en caso contrario. Escriba luego
        un programa que lea un número ingresado por usuario y diga si es primo o no. Como requerimiento, la función debe estar en un
        archivo diferente al del programa, y su código debe importar la función.
      </p>

      <h3>Ejercicio 6</h3>
      <p>Escriba una función que genere una contraseña aleatoria. La contraseña deberá tener un largo aleatorio entre 7 y 10 caracteres. Cada
      caracter deberá ser escogido aleatoriamente desde las posiciones 33 a 126 de la tabla ASCII. Su función no deberá tener ningún parámetro.
      La función retornará la contraseña generada. Luego, escriba un programa que importe dicha función y genere <code>N</code> contraseñas aleatorias,
      donde <code>N</code> es dado por argumento vía <code>argv</code>. Para implementar la función, puede utilizar la función <code>chr</code>, leer
      la documentación.</p>

      <h3>Ejercicio 7</h3>

      <p>Existen distintos algoritmos para ordenar listas de elementos. Un algoritmo bastante simple es el ordenamiento burbuja. El pseudocódigo
      del algoritmo es como sigue:
      </p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "procedimiento bubble_sort(lista)\n"
          + "N = largo(lista)\n"
          + "Para i = 0 a N - 1 hacer\n"
          + "    intercambiado = false\n"
          + "    para j = 0 a N - 2 hacer\n"
          + "        Si lista[j] > lista[j+1] entonces\n"
          + "            intercambiar( lista[i], lista[j+1] )\n"
          + "            intercambiado = true\n"
          + "    Si intercambiado == false entonces\n"
          + "        break\n"
          + "retornar lista\n"
        }
      </SyntaxHighlighter>

      <p>Escriba una función que ordene un <code>string</code> alfabéticamente usando bubble sort. Para simplificar el problema,
      considere que el <code>string</code> sólo contendrá caractéres numéricos y letras en minúsculas. Python implementa la comparación de
      strings, así que puede usar el operador <code>&gt;</code>. Por otro lado los objetos de tipo string son <b>inmutables</b> por lo tanto
      deberá transformar el <code>string</code> a <code>list</code>. Luego escriba un programa que dado un <code>string</code> ingresado por usuario,
      muestre el string ordenado alfabéticamente.</p>

      <p>Ejemplo de uso:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "texto = \"zyxwvutsr\"\n"
          + "texto_lista = list(texto)\n"
          + "print(f\"Texto original: {texto}\")\n"
          + "print(f\"Texto ordenado: {''.join(bubble_sort(texto_lista))}\")"
        }
      </SyntaxHighlighter>

      <p>Salida:</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          ">python bubble_sort.py\n"
          + "Texto original: zyxwvutsr\n"
          + "Texto ordenado: rstuvwxyz"
        }
      </SyntaxHighlighter>

    </div>
  )
}

export default withLayout(WeekTwo);