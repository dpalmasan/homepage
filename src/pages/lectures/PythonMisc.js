import React from "react";
import withLayout from "../../components/withLayout";
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function PythonMisc() {
  return (
    <div className='container'>
      <h1 className='mt-5'>¿Sobre qué es este apartado?</h1>
      <p className='lead'>
        En este apartado no defino nada en relación a características de Python, si no que a buenas prácticas en el
        estilo de código. Hay muchas formas de escribir código en Python y en general en cualquier lenguaje de programación.
        Sin embargo, en general es bueno seguir ciertas convenciones, de manera que todos los integrantes de un equipo sean
        consistentes en el estilo de programar y el código sea homogéneo, lo que aumenta la "mantenibilidad" del código, y como
        consecuencia, se tiene código de calidad, robusto, profesional y no una solución de de juguete.
            </p>
      <h2>Ejemplo de código sin estándar ni buenas convenciones</h2>

      <p>Para las demostraciones vamos a utilizar el siguiente bloque (<em>snippet</em>) de código:</p>
      <SyntaxHighlighter language="python" style={docco}>
        {
          "from sys import *\n"
          + "def CalcularIMC(peso,estatura):\n"
          + "    return peso/(estatura**2)\n"
          + "\n"
          + "nombre=argv[1]\n"
          + "\n"
          + "print(\"Bienvenido {}\".format(nombre))\n"
          + "peso=float(input(\"Ingrese su peso: \"))\n"
          + "estatura=float(input(\"Ingrese su estatura: \"))\n"
          + "\n"
          + "print(\"Su IMC es: {}\".format(CalcularIMC(peso,estatura)))\n"
        }
      </SyntaxHighlighter>


      <h3 id="windows" className='mt-5'>¿Por qué el código es malo?</h3>
      <p>El código funciona pero no tiene calidad alguna. Lo que se debe recordar en programación es lo siguiente:
            <em>"Que funcione no significa que esté correcto"</em>. En particular, el fragmento de código anterior no sigue
            el estándar <a target="_blank" rel="noopener noreferrer" href="https://www.python.org/dev/peps/pep-0008/">PEP8</a>. En mi
            experiencia, utilizar este estándar me ha aliviado bastantes dolores de cabeza. Sin embargo, el estándar es gigante y leerlo
            y tenerlo en cuenta cada vez que escribimos código es una tarea poco factible. Por ello, se han desarrollado herramientas
            para ayudar a mejorar la calidad del código, en cuanto a estilo.</p>

      <h4>Flake 8</h4>
      <p><a target="_blank" rel="noopener noreferrer" href="https://flake8.pycqa.org/en/latest/">Flake 8</a> está construido bajo
            <code>PyFlakes</code>, <code>pycodestyle</code> y <code>Ned Batchelder’s McCabe script</code>, que son básicamente herramientas
            que implementan chequeos de estilo de código, dado un código python. Para instalar <code>flake8</code> pueden hacerlo con el
            siguiente comando <code>pip install flake8</code>. Consideremos que el código mencionado antes se llama <code>example.py</code>,
            entonces, para chequear el estilo de código, podemos ejecutar <code>flake8 example.py</code>, obtendremos lo siguiente:</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "> flake8 example.py\n"
          + "example.py:1:1: F403 'from sys import *' used; unable to detect undefined names\n"
          + "example.py:2:1: E302 expected 2 blank lines, found 0\n"
          + "example.py:2:21: E231 missing whitespace after ','\n"
          + "example.py:5:1: E305 expected 2 blank lines after class or function definition, found 1\n"
          + "example.py:5:7: E225 missing whitespace around operator\n"
          + "example.py:5:8: F405 'argv' may be undefined, or defined from star imports: sys\n"
          + "example.py:8:5: E225 missing whitespace around operator\n"
          + "example.py:9:9: E225 missing whitespace around operator\n"
          + "example.py:11:46: E231 missing whitespace after ','\n"
          + "example.py:11:58: W292 no newline at end of file"
        }
      </SyntaxHighlighter>

      <p>Lo que nos está diciendo <code>flake8</code> es que el código tiene muchos errores que no cumplen los estándares, además
            hace referencia al estándar (ejemplo: F403, E302, etc.) y nos dice las líneas que están en conflicto como guía para corregirlo.</p>

      <h4>Black Python Formatter</h4>

      <p>Otra debilidad que tiene el código anterior es cómo está formateado. No respeta tampoco estándares en cuanto a saltos
      de línea, espacios, etc. Un paquete muy utilizado (profesionalmente y en proyectos de código abierto) es
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/psf/black">black</a>. Para instalar black, simplemente
            ejecutar <code>pip install black</code>. Por ejemplo, pueden usarlo para re-formatear el código
            anterior: <code>black example.py</code></p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          ">black example.py\n"
          + "reformatted example.py\n"
          + "All done! ✨ �🍰✨✨\n"
          + "1 file reformatted."
        }
      </SyntaxHighlighter>

      <p>El código será reformateado y quedará así:</p>
      <SyntaxHighlighter language="shell" style={docco}>
        {
          "from sys import *\n"
          + "\n"
          + "\n"
          + "def CalcularIMC(peso, estatura):\n"
          + "    return peso / (estatura ** 2)\n"
          + "\n"
          + "\n"
          + "nombre = argv[1]\n"
          + "\n"
          + "print(\"Bienvenido {}\".format(nombre))\n"
          + "peso = float(input(\"Ingrese su peso: \"))\n"
          + "estatura = float(input(\"Ingrese su estatura: \"))\n"
          + "\n"
          + "print(\"Su IMC es: {}\".format(CalcularIMC(peso, estatura)))"
        }
      </SyntaxHighlighter>

      <p>Se observa que ahora existe un espacio entre operadores (asignación, operaciones matemáticas), lo que
            sigue las convenciones a la hora de escribir código con python. Queda mucho más legible que la versión anterior.</p>

      <h4>Pydocstyle</h4>

      <p><a target="_blank" rel="noopener noreferrer" href="https://pypi.org/project/pydocstyle/">Pydocstyle</a> es una herramienta para chequear el estilo de
            los <code>docstrings</code> (documentación) de las funciones y clases. Para instalar
            ejecutar <code>pip install pydocstyle</code>, abajo se muestra el resultado de correr <code>pydocstyle</code> en el código
            de ejemplo:</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          ">pydocstyle example.py\n"
          + "example.py:1 at module level:\n"
          + "        D100: Missing docstring in public module\n"
          + "example.py:4 in public function `CalcularIMC`:\n"
          + "        D103: Missing docstring in public function"
        }
      </SyntaxHighlighter>

      <p>Lo que nos está diciendo <code>pydocstyle</code> es que faltan los <code>docstrings</code> del módulo y
            de la función definida.</p>

      <h3>Integrando los chequeos con Visual Studio Code</h3>
      <p>Como podrán notar, es un poco tedioso correr los chequeos cada vez que se modifica el código, por ello
            usamos un IDE, para agilizar el trabajo. <code>VSCode</code> cuenta con integraciones y plugins para incoporar
            el uso de estas herramientas automáticamente.</p>

      <p>Para configurar <code>VSCode</code> con <code>flake8</code>, en Windows/Linux hacen <code>ctrl + shift + P</code> (en MAC
            sería <code>cmd + shift + P</code>), escogen select linter, y eligen flake8. En caso de que algo no funcione, las instrucciones
            completas en <a target="_blank" rel="noopener noreferrer" href="https://code.visualstudio.com/docs/python/linting">este enlace</a>. Si
            hicieron todo correctamente, ahora los mensajes de <code>flake8</code> deberían poder verlos desde el editor:</p>


      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4}>
          <Image src={process.env.PUBLIC_URL + '/imgs/linter.png'} fluid />
        </Col>
      </Row>

      <p>Para agregar <code>black</code> a <code>VSCode</code> code, pueden seguir
      <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@marcobelo/setting-up-python-black-on-visual-studio-code-5318eba4cd00">estas instrucciones</a></p>

      <p>Para documentar funciones en <code>python</code> existen varios formatos. Yo personalmente he utilizado
      <code>restructuredText</code> y encuentro que queda bastante bien. Por ejemplo pueden mirar el
      <a target="_blank" rel="noopener noreferrer" href="https://www.python.org/dev/peps/pep-0287/">PEP 287</a>. Para configurar
      <code>restructuredText</code> en <code>VSCode</code>, pueden instalar el
      plugin <a target="_blank" rel="noopener noreferrer" href="https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring">Python Docstring Generator</a> y
      configurarlo eligiendo formato <code>sphinx</code>.</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4}>
          <Image src={process.env.PUBLIC_URL + '/imgs/docstring.png'} fluid />
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4}>
          <Image src={process.env.PUBLIC_URL + '/imgs/docstring2.png'} fluid />
        </Col>
      </Row>

      <p>Finalmente se les generará automáticamente el docstring cuando escriban <code>""" + enter</code> bajo la función. El código finalmente
      quedará así:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "\"\"\"Ejemplo para la el curso.\"\"\"\n"
          + "\n"
          + "from sys import argv\n"
          + "\n"
          + "\n"
          + "def calcular_imc(peso, estatura):\n"
          + "    \"\"\"Compute IMC.\n"
          + "\n"
          + "    :param peso: Peso de la persona\n"
          + "    :type peso: float\n"
          + "    :param estatura: estatura de la persona\n"
          + "    :type estatura: float\n"
          + "    :return: IMC de la persona\n"
          + "    :rtype: float\n"
          + "    \"\"\"\n"
          + "    return peso / (estatura ** 2)\n"
          + "\n"
          + "\n"
          + "nombre = argv[1]\n"
          + "\n"
          + "print(\"Bienvenido {}\".format(nombre))\n"
          + "peso = float(input(\"Ingrese su peso: \"))\n"
          + "estatura = float(input(\"Ingrese su estatura: \"))\n"
          + "\n"
          + "print(\"Su IMC es: {}\".format(calcular_imc(peso, estatura)))\n"
        }
      </SyntaxHighlighter>

      <ul>
        <li>Cambié el nombre de la función por minúsculas, porque es una función. Por convención, en general sólo las clases
        se escriben con mayúsculas (en general).</li>
        <li>Se agregó docstring con formato <code>sphinx</code> a la función <code>calcular_imc</code></li>
        <li>Se corrigieron los errores que arrojaba <code>flake8</code> y se reformateó el código con <code>black</code> para hacerlo más legible.</li>
      </ul>
    </div>
  )
}

export default withLayout(PythonMisc);