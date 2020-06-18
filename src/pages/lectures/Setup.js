import React from "react";
import withLayout from "../../components/withLayout";
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Setup() {
  return (
    <div className='container'>
      <h1 className='mt-5'>Requerimientos para poder trabajar en los módulos</h1>
      <p className='lead'>
        En esta sección se definen los requerimientos para poder trabajar de forma óptima dentro del curso.
                Por otro lado, se dan algunos tips para usuarios de distintos Sistemas Operativos: basados en <code>UNIX (Mac, Linux)</code> o <code>Windows</code>.
                Si las imágenes se ven muy pequeñas, click derecho en la imágen y abrir en pestaña nueva para verla en tamaño completo.
            </p>
      <h2>Uso de terminal</h2>

      <h3 id="windows" className='mt-5'>Usuarios de Windows</h3>
      <p>
        Al momento de crear el contenido no conozco a los estudiantes del curso. Tengo el sesgo de asumir que la mayoría será usuario de windows.
              En general, mi recomendación es que instalen <a href="https://www.anaconda.com/products/individual" target="_blank" rel="noopener noreferrer">Anaconda</a> y
              así se evitan varios dolores de cabeza. En simples razones, muchas dependencias de paquetes de <code>python</code> que utilizarán son
              dependientes del Sistema Operativo y si no tienen experiencia compilando libs a windows, mejor bajar anaconda que viene con un entorno
              resuelto. También recomiendo instalar Anaconda con <code>Python 3</code>, ya que la versión 2 fue deprecada este año (no tiene más soporte).

              Teniendo anaconda instalado, yendo a inicio (o presionando tecla <code>win</code>), buscamos <code>Anaconda</code> y abrimos <code>Anaconda prompt</code> esto
              abrirá una terminal:
            </p>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={12}>
          <Image src={process.env.PUBLIC_URL + '/imgs/windows1.png'} fluid />
        </Col>
      </Row>
      <p>
        La terminal estará ya con el entorno de <code>Anaconda</code> configurado y en general estarán en su directorio <code>home</code>, que sería:
              <code>C:\Users\&lt;TU_USUARIO&gt;</code>, esto lo pueden ver de la terminal, o comprobarlo con el comando <code>cd</code> (Notar, si ud
              es usuario de terminal en <code>UNIX</code>, el comando <code>cd</code> en una <code>shell</code> de Windows es diferente, hacer <code>cd</code> en
              Windows sin argumentos, es equivalente a <code>pwd</code> en <code>UNIX</code>):
            </p>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={12}>
          <Image src={process.env.PUBLIC_URL + '/imgs/windows2.png'} fluid />
        </Col>
      </Row>

      <p>
        Como ejemplo creemos un directorio llamado <code>test</code> en terminal. Para ello, ejecutamos el comando <code>mkdir test</code>, luego
              podemos verificar que el directorio fue creado, con el comando <code>dir</code>. Para ir al directorio, podemos hacer <code>cd test</code>:
            </p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={12}>
          <Image src={process.env.PUBLIC_URL + '/imgs/windows3.png'} fluid />
        </Col>
      </Row>

      <p>
        Creemos un pequeño código <code>Python</code> y ejecutémoslo por terminal. Para ello hagamos <code>echo print('Hello world!') &gt; hello.py</code>, luego <code>python hello.py</code>,
              deberiamos ver lo siguiente:
            </p>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={12}>
          <Image src={process.env.PUBLIC_URL + '/imgs/windows5.png'} fluid />
        </Col>
      </Row>

      <p>Los directorios <code>.</code> y <code></code> son especiales. El primero es el directorio actual, mientras que <code>..</code> es
            el directorio padre.</p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={12}>
          <Image src={process.env.PUBLIC_URL + '/imgs/windows4.png'} fluid />
        </Col>
      </Row>

      <p>
        Para efectos del curso, sólo será necesario aprender lo básico de utilizar una terminal. Por ejemplo, crear directorios,
        cambiar directorio, listar directorios. Para más información respecto a comandos disponibles, pueden
              <a href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands" target="_blank" rel="noopener noreferrer"> revisar la documentación</a>
      </p>

      <p>
        Si queremos usar el entorno de conda en visual studio code, básicamente es <code>ctrl + shift + p</code>, buscar <code>python interpreter</code>
              Y elegir el entorno de anaconda, como se muestra en la imágen abajo. Para abrir una terminal en visual studio code, pueden ir al menú
              terminal y abrir una nueva, o hacer <code>ctrl + shift + ñ</code>.
            </p>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={12}>
          <Image src={process.env.PUBLIC_URL + '/imgs/windows6.png'} fluid />
        </Col>
      </Row>

      <h3 id="unix" className='mt-5'>Usuarios Linux y Mac</h3>
      <p>
        Yo en mi equipo personal utilizo Windows con <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10" target="_blank" rel="noopener noreferrer">WSL</a>
              (Windows Subsystem for Linux), es básicamente tener alguna distribución Linux en windows. De hecho, <code>VSCode</code> tiene una integración
              con WSL y es bastante útil para propósitos de desarrollo. Con esto quiero decir, si alguien tiene <code>WSL</code>, los pasos son equivalentes
              que en el caso de Linux.
            </p>

      <p>
        Otro punto importante es tener un administrador de paquetes; este paso no es fundamental pero tenganlo en cuenta. En general las distribuciones de Linux vienen con administradores
              de paquetes (por ejemplo en Linux basados en Debian tienen el comando <code>apt-get</code> para instalar librerías, etc, de distintos
              repositorios.). En Mac, tengo entendido que las versiones más recientes del sistema operativo vienen ya con un administrador de paquetes,
              en caso contrario, recomiendo instalar <a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">brew</a>. Finalmente, recomiendo
              a usuarios de Mac, que instalen una terminal decente, la que viene por defecto no es muy buena. Yo he usado
              <a href="https://www.iterm2.com/" target="_blank" rel="noopener noreferrer">iTerm2</a> y lo he encontrado bastante bueno.
            </p>

      <p>Para abrir la terminal en <code>Mac</code>, pueden hacer la combinación <code>cmd + espacio</code> y escribe terminal. Abrir la terminal.
            Deberían estar en el directorio <code>HOME</code> que un atajo en UNIX es <code>&tilde;</code>. Chequear que tenemos <code>python</code> en
            el entorno y ver la versión: <code>python --version</code> si les sale versión 2, probar con <code>python3 --version</code>:
            </p>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={12}>
          <Image src={process.env.PUBLIC_URL + '/imgs/unix1.png'} fluid />
        </Col>
      </Row>

      <p>En general las distribuciones de Mac y Linux vienen con python instalado. Creemos un directorio llamado test, vamos a dicho directorio,
      creemos un pequeño script en python, listemos el directorio y ejecutemos el script por terminal:
            </p>
      <ol>
        <li><code>mkdir test</code></li>
        <li><code>cd test</code></li>
        <li><code>echo 'print("Hello world!")' &gt; hello.py</code></li>
        <li><code>ls</code></li>
        <li><code>python hello.py</code></li>
      </ol>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={12}>
          <Image src={process.env.PUBLIC_URL + '/imgs/unix2.png'} fluid />
        </Col>
      </Row>

      <p>Para más información, revisar documentación, para ello buscar en internet <code>man pages</code>. Por ejemplo
            el sitio de <a href="https://manpages.ubuntu.com/" target="_blank" rel="noopener noreferrer">Ubuntu</a>.</p>

      <h2 className='mt-5' id="ides">IDE recomendado (<em>Interactive Development Environment</em>)</h2>
      <p>
        No entraré en detalle, pero básicamente el editor de texto recomendado. Aquí no hay receta para todo, yo en lo personal
              he probado <code>nano</code>, <code>emacs</code>, <code>VIM</code>, <code>sublime</code>, <code>Atom</code>, <code>Visual Studio Code (VSCode)</code>.
              El que recomiendo definitivamente es <code>VSCode</code>. <code>Atom</code> es demasiado lento (o lo era cuando lo utilicé),
              editores de texto bajo terminal como <code>nano</code>, <code>emacs</code> o <code>VIM</code> tienen una rampa de aprendizaje
              un poco inclinada (no es para el usuario sin experiencia trabajando bajo terminal), yo en realidad los recomendaría en casos particulares
              (e.g Trabajando en un clúster remoto, configurando inicialmente un server, se tiene RAM limitada, etc.) Sin embargo, siéntanse libres
              de utilizar lo que más les acomode. La página oficial de <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode</a>.
            </p>
    </div>
  )
}

export default withLayout(Setup);