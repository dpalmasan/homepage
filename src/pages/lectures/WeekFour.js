import React from "react";
import withLayout from "../../components/withLayout";
import MathJax from 'react-mathjax-preview';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function WeekFour() {

  return (
    <div className='container'>
      <h1 className='mt-5'>APIs</h1>
      <p className='lead'>
        Esta semana es de APIs, un tema bastante importante y que es bueno tener conocimiento. Por ejemplo, existen fuentes de datos de terceros
        con las cuales uno se comunica vía peticiones HTTP. Desde el lado de la fuente de datos (usualmente un servidor externo), para pedir datos
        específicos, se define una API (del inglés <em>Application Programming Interface</em>, que es básicamente un contrato que especifica funciones,
        parámetros, entradas y salidas, sin dar detalle de como están construidas internamente. Una API sea por web o directamente, puede pensarse
        como un conjunto de funciones que reciben entradas y salidas, la diferencia en este caso con las funciones que hemos visto en python, es que
        los datos se transmitten vía web.</p>

      <h3>Un poco más sobre diccionarios</h3>

      <p>Dado que dentro del curso lidiaremos con APIs que entregan datos en forma de <code>JSON</code> (aunque hay otras APIs web que no necesariamente usan
      <code>JSON</code> para ello), es que debemos tener conocimiento y dominio sobre diccionarios, ya que un <code>JSON</code> tiene bastante similitudes
      con los diccionarios en python. Por ello, primero repasaremos un poco de diccionarios. Para los ejemplos que siguen, consideremos el siguiente
      diccionario, que contendrá peak de usuarios diarios logueados en un sitio ficticio:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'usuarios_log = {\n'
          + '    "Lunes": 140,\n'
          + '    "Martes": 200,\n'
          + '    "Miércoles": 360,\n'
          + '    "Jueves": 140,\n'
          + '    "Viernes": 200,\n'
          + '    "Sábado": 140,\n'
          + '    "Domingo": 140\n'
          + '}\n'
        }
      </SyntaxHighlighter>

      <p>Como ya se expuso en el material complementario de la semana 3, un diccionario es un conjunto de clave-valor, que permite eficientemente
      acceder a una clave determinada y extraer el valor de ella. Por ejemplo, si queremos ver la cantidad de clicks que hubo el Jueves, se podría
      hacer vía <code>usuarios_log['Jueves']</code>. Supongamos ahora, que queremos mostrar todas las claves y valores del diccionario. Al igual que
      las listas, los <code>strings</code>, los diccionarios soportan iteraciones. Por ejemplo, si queremos mostrar la cantidad de usuarios para
      todos los días, la forma <em>pythónica</em> de hacerlo es:</p>


      <SyntaxHighlighter language="python" style={docco}>
        {
          'for dia, conteo_usuarios in usuarios_log.items():\n'
          + '    print(f"Usuarios {dia}: {conteo_usuarios}")\n'
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          'Usuarios Lunes: 140\n'
          + 'Usuarios Martes: 200\n'
          + 'Usuarios Miércoles: 360\n'
          + 'Usuarios Jueves: 140\n'
          + 'Usuarios Viernes: 200\n'
          + 'Usuarios Sábado: 140\n'
          + 'Usuarios Domingo: 140\n'
        }
      </SyntaxHighlighter>

      <p>Supongamos ahora, que queremos saber los días en que la cantidad de usuarios fue menor que <code>190</code>, ello se podría hacer
      combinando iteraciones con condiciones, como sigue:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'for dia, conteo_usuarios in usuarios_log.items():\n'
          + '    if conteo_usuarios < 190:\n'
          + '        print(f"{dia}")\n'
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          'Lunes\n'
          + 'Jueves\n'
          + 'Sábado\n'
          + 'Domingo\n'
        }
      </SyntaxHighlighter>

      <p>Supongamos que queremos calcular la cantidad de usuarios promedio conectados durante la semana y durante el fin de semana. Para ello podemos
      implementar una función <code>es_fin_de_semana</code>.</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'def es_fin_de_semana(dia):\n'
          + '    return dia in {"Sábado", "Domingo"}\n'
          + '\n'
          + '\n'
          + 'usuarios_semana = {}\n'
          + 'WEEKDAY_KEY = "Día de Semana"\n'
          + 'WEEKEND_KEY = "Fin de Semana"\n'
          + '\n'
          + 'for dia, conteo_usuarios in usuarios_log.items():\n'
          + '    if es_fin_de_semana(dia):\n'
          + '        usuarios_semana[WEEKEND_KEY] = (\n'
          + '            usuarios_semana.get(WEEKEND_KEY, 0) + conteo_usuarios\n'
          + '        )\n'
          + '    else:\n'
          + '        usuarios_semana[WEEKDAY_KEY] = (\n'
          + '            usuarios_semana.get(WEEKDAY_KEY, 0) + conteo_usuarios\n'
          + '        )\n'
          + '\n'
          + 'usuarios_semana[WEEKEND_KEY] /= 2\n'
          + 'usuarios_semana[WEEKDAY_KEY] /= 5\n'
          + 'print(usuarios_semana)\n'
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "{'Día de Semana': 208.0, 'Fin de Semana': 140.0}"
        }
      </SyntaxHighlighter>

      <h4>Fé de erratas a contenido de diapositivas y quizás sesión online</h4>

      <p>Revisando el material me encontré con ejemplos de cómo contar ocurrencias en un diccionario, usando <code>groupby</code> de la
      biblioteca <code>itertools</code>. Si bien, se puede lograr lo esperado, es mala idea hacerlo de esa forma, porque sobre-complica un
      problema que en esencia es simple de resolver. El ejemplo que muestra el material es el siguiente:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "lista = [1, 2, 6, 7, 2, 5, 8, 9, 1, 2, 9, 7]\n"
          + "lista.sort()\n"
          + "diccionario = {k: len(list(v)) for k, v in groupby(lista)}\n"
          + "print(diccionario)\n"
        }
      </SyntaxHighlighter>

      <p>Para los que tengan alguna experiencia en bases de datos y alguna variación de <code>SQL</code>, el <code>groupby</code> del
      módulo <code>itertools</code> no es como el de <code>SQL</code> (ese sí se usa para agrupar y contar). En este caso, <code>groupby</code> es simiar
      a <code>uniq</code> de <code>UNIX</code> (pueden leer la documentación para mas detalle).</p>
      <p>
        <MathJax math={
          `Por otro lado, el código funciona correctamente pero es sobre-complicar un problema que en esencia es simple. Además, requiere ordenar la lista 
          para artificialmente aplicar <code>groupby</code> y contar elementos. No sé si recuerdan el material complementario de complejidad 
          asintótica. Ordenar una lista tiene una complejidad asintótica $O(n\\cdot log(n))$, pero el problema de contar elementos tiene una 
          complejidad asintótica $O(n)$, por lo tanto: ¡Además de sobre-complicar el problema, lo estamos haciendo ineficientemente! De hecho 
          para contar elementos en una lista, está la función <code>Counter</code> de la biblioteca <code>collections</code>, que se puede 
          importar usando <code>from collections import Counter</code>. El código de arriba sería reemplazado por:
          `} />
      </p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          "diccionario = Counter(lista)\n"
          + "print(diccionario)\n"
        }
      </SyntaxHighlighter>

      <p>Como se puede observar, es mucho más simple de leer y además es más eficiente. Por completitud, supongamos que tenemos un diccionario
      de usuarios y sus tallas de plan móvil para su celular (<code>XS, S, M</code>), y queremos saber cuántos usuarios poseen una talla determinada.</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'personas = {\n'
          + '    "id1": "XS",\n'
          + '    "id2": "S",\n'
          + '    "id3": "S",\n'
          + '    "id4": "M",\n'
          + '    "id5": "XS",\n'
          + '    "id6": "XS",\n'
          + '    "id7": "M",\n'
          + '    "id8": "XS",\n'
          + '    "id9": "S",\n'
          + '}\n'
        }
      </SyntaxHighlighter>


      <p>Este problema lo podemos ver como un problema de contar ocurrencias, y se puede resolver como sigue:</p>


      <SyntaxHighlighter language="python" style={docco}>
        {
          'conteo_tallas = {}\n'
          + 'for persona_id, talla in personas.items():\n'
          + '    conteo_tallas[talla] = conteo_tallas.get(talla, 0) + 1\n'
          + '\n'
          + 'print(conteo_tallas)\n'
          + '\n'
          + '# Usando Counter\n'
          + 'conteo_tallas2 = Counter(personas.values())\n'
          + 'print(conteo_tallas2)\n'
        }
      </SyntaxHighlighter>

      <h3>APIs web y peticiones HTTP</h3>

      <p>En esta sección no ahondaré mucho en detalles sobre cómo funciona una API, definir cliente servidor, ya que eso debiese estar cubierto
      en el material de las sesiones online. Sin embargo, me gustaría mostrar un ejemplo práctico de comunicarse con una API en python usando la
      biblioteca <code>requests</code>. ¿Por qué es importante saber sobre APIs web? En particular, muchos servicios por terceros (ejemplos: Amazon Web
      Services, servicios de Google Cloud Platform, Facebook, Paypal, Pingdom, etc.) ofrecen APIs web para traer datos. Esto se conoce como fuentes
      externas de datos, y sirve en caso de que se quiera proponer extraer otro tipo de datos para agregar a modelos de analítica, o para incluso corregir
      datos que ya hayan sido ingestado a las tablas.</p>

      <h4>Jugando con peticiones web</h4>

      <p>De las sesiones online, deben haber visto al menos 4 diferentes métodos para peticiones
      web: <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>. Existen otros métodos, pero de momento no será necesario ahondar
      en ellos. Por otro lado, <b>una aclaración</b>, he visto en la práctica que muchas <code>API</code> que retornarn <code>JSON</code> por alguna
      razón se les llama <code>API REST</code>, sin embargo esto a muchas veces es incorrecto. Si quieren realmente entender lo que significa <code>REST</code>,
      pueden leer la tesis del creador de este estilo
      arquitectural: <a href="https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm" without rel="noopener noreferrer" target="_blank">REST thesis</a>. Esto lo detallo por completitud,
      en la práctica muchas veces se les llama <code>API REST</code> a <code>APIs</code> que no siguen realmente esta arquitectura.</p>

      <p>
        Para el ejemplo de diferentes métodos, utilizaremos <a href="https://reqres.in/" without rel="noopener noreferrer" target="_blank">reqres</a>, que es básicamente un sitio
        donde podemos testear métodos de una API. Si instalaron <code>POSTMAN</code>, pueden usar esa herramienta para trabajar. Yo en particular, prefiero
        hacerlo por términal ya que siento que es más rápido. Así que alternativamente al material de <code>POSTMAN</code> que hay online, les enseñaré
        a enviar requests vía terminal. Para no extenderme mucho, sólo pondré ejemplos de métodos <code>GET</code> y <code>POST</code>.
      </p>

      <p>
        Supongamos que queremos listar los usuarios de la <code>API</code>. Según el sitio, el punto de acceso, o <code>url</code> es
        el siguiente: <code>https://reqres.in/api/users</code>. Enviaremos una petición web a esta <code>url</code>, pondré dos alternativas
        para hacerlo, una es vía el comando <code>curl</code> (si tienes una terminal basada <code>UNIX</code>, es
        decir <code>Linux</code> o <code>MacOS</code>). En <code>Windows</code>, sólo proveeré una alternativa usando <code>Powershell</code>, ya que
        creo que no viene nativamente instalado un programa en <code>cmd</code>, por lo tanto, si no tienen <code>Powershell</code>, usen <code>POSTMAN</code>.
      </p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          'curl https://reqres.in/api/users\n'
          + '{"page":1,"per_page":6,"total":12,"total_pages":2,"data":\n'
          + '[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},\n'
          + '{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},\n'
          + '{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},\n'
          + '{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},\n'
          + '{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},\n'
          + '{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"}],\n'
          + '"ad":{"company":"StatusCode Weekly","url":"http://statuscode.org/","text":"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."}}%\n'
        }
      </SyntaxHighlighter>

      <p>En <code>Windows Powershell</code> se puede hacer usando el comando <code>Invoke-WebRequest</code>:</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          'Invoke-WebRequest -Uri https://reqres.in/api/users\n'
          + '\n'
          + '\n'
          + 'StatusCode        : 200\n'
          + 'StatusDescription : OK\n'
          + 'Content           : {"page":1,"per_page":6,"total":12,"total_pages":2,"data":[{"id":1,"email":"george.bluth@reqres.in",\n'
          + '                    "first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/\n'
          + '                    ca...\n'
          + 'RawContent        : HTTP/1.1 200 OK\n'
          + '                    Connection: keep-alive\n'
          + '                    Access-Control-Allow-Origin: *\n'
          + '                    CF-Cache-Status: HIT\n'
          + '                    Age: 2954\n'
          + '                    cf-request-id: 0409dc416c0000f7dea9086200000001\n'
          + '                    Expect-CT: max-age=604800, report-uri="https:...\n'
          + 'Forms             : {}\n'
          + 'Headers           : {[Connection, keep-alive], [Access-Control-Allow-Origin, *], [CF-Cache-Status, HIT], [Age,\n'
          + '                    2954]...}\n'
          + 'Images            : {}\n'
          + 'InputFields       : {}\n'
          + 'Links             : {}\n'
          + 'ParsedHtml        : mshtml.HTMLDocumentClass\n'
          + 'RawContentLength  : 1221\n'
        }
      </SyntaxHighlighter>

      <p>Ahora supongamos que queremos probar crear un usuario, esto según la página se haría con la misma <code>url</code>, excepto
      que debe hacerse con una petición <code>POST</code> y que el cuerpo o <code>body</code> de la petición debe tener los datos del usuario.</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          'curl --header "Content-Type: application/json" --request POST --data \'{"name":"Oscar","job":"data scientist"}\' https://reqres.in/api/users\n'
          + '{"name":"Oscar","job":"data scientist","id":"61","createdAt":"2020-07-19T18:13:35.277Z"}% \n'
        }
      </SyntaxHighlighter>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          'Invoke-WebRequest -Uri https://reqres.in/api/users -Method POST -Body @{name="Oscar";job="data scientist"} \n\n'
          + 'StatusCode        : 201\n '
          + 'StatusDescription : Created\n '
          + 'Content           : {"name":"Oscar","job":"data scientist","id":"883","createdAt":"2020-07-19T18:13:17.707Z"}\n '
          + 'RawContent        : HTTP/1.1 201 Created\n'
          + '                    Connection: keep-alive\n'
          + '                    Access-Control-Allow-Origin: *\n'
          + '                    CF-Cache-Status: DYNAMIC\n'
          + '                    cf-request-id: 0409e0cf4c000074f3dd323200000001\n '
          + '                    Expect-CT: max-age=604800, report-uri="https://...\n'
          + 'Forms             : {}\n'
          + 'Headers           : {[Connection, keep - alive], [Access - Control - Allow - Origin, *], [CF - Cache - Status, DYNAMIC],\n'
          + '                    [cf-request-id, 0409e0cf4c000074f3dd323200000001]...}\n '
          + 'Images            : {}\n'
          + 'InputFields       : {}\n'
          + 'Links             : {}\n'
          + 'ParsedHtml        : mshtml.HTMLDocumentClass\n'
          + 'RawContentLength  : 89\n'
        }
      </SyntaxHighlighter>

      <h4>Ejemplo práctico</h4>
      <p>Dejaré un par de enlaces con distintas APIs públicas para que jueguen. Les recomendaría probar unas
      con autenticación y otras sin autenticación.</p>

      <ul>
        <li><a href="https://github.com/public-apis/public-apis" target="_blank" rel="noopener noreferrer">https://github.com/public-apis/public-apis</a></li>
        <li><a href="https://punkapi.com/" target="_blank" rel="noopener noreferrer">https://punkapi.com/</a></li>
      </ul>

      <p>Para los ejemplos propuestos, utilizaremos la <code>punkapi</code>, que básicamente es una API para comunicarse con una base de datos de
      cervezas. Lo primero que debe hacerse al interactuar con una API es leer la documentación, para obtener información de las entidades que se
      almacenan (tipos de datos) y de los puntos de acceso (<em>endpoints</em>) para enviar peticiones HTTP. En el caso de la API, la documentación puede
      leerse en: <a href="https://punkapi.com/documentation/v2" target="_blank" rel="noopener noreferrer">https://punkapi.com/documentation/v2</a></p>

      <p>Supongamos que queremos comunicarnos con esta API y que por ahora sólo le daremos soporte a peticiones tipo <code>GET</code>. De la documentación
      podemos extraer la <code>url</code> base de la API. Por otro lado, vemos que las API entrega como respuesta un JSON, por lo tanto nuestro código
      en python debería empezar definiendo las variables pertinentes, e importando bibliotecas para trabajar con peticiones <code>HTTP</code> y
      <code>json</code>:</p>


      <SyntaxHighlighter language="python" style={docco}>
        {
          'import requests\n'
          + 'import json\n'
          + '\n'
          + '\n'
          + '# Agregar otros métodos si se da soporte, ejemplo: {"GET", "POST", "PUT", "DELETE"}\n'
          + 'SUPPORTED_HTTP_REQ_METHODS = {"GET"}\n'
          + 'API_URL = "https://api.punkapi.com/v2/beers"\n'
        }
      </SyntaxHighlighter>

      <p>Ahora supongamos que queremos implementar una función que traiga los datos de una cerveza, dado el <code>id</code> de la cerveza. Podemos
      ver de la documentación (es importante SIEMPRE leer la documentación de todo, sean API, sean libs python, sean comandos UNIX, etc.) que el
      punto de acceso es <code>https://api.punkapi.com/v2/beers/:id</code>, donde <code>id</code> puede ser un entero, representando el identificador
      de la cerveza, o si se quiere extraer una cerveza al azar se puede usar <code>random</code>. Supongamos que la firma de nuestra
      función <code>request</code> tendrá <b>4</b> argumentos: <code>method</code>, <code>data</code>, <code>headers</code>, <code>id</code>. Por
      defecto <code>data</code> y <code>headers</code> serán <code>None</code>, y el <code>id</code> tendrá valor <code>random</code>. Luego
      podemos definir la siguiente función:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'def beer_request(method, data=None, headers=None, id="random"):\n'
          + '    url = f"{API_URL}/{id}"\n'
          + '    method = method.upper()\n'
          + '    if method not in SUPPORTED_HTTP_REQ_METHODS:\n'
          + '        raise ValueError(\n'
          + '            f"Provided method: {method} not in {SUPPORTED_HTTP_REQ_METHODS}"\n'
          + '        )\n'
          + '    return requests.request(method, url, data=data, headers=headers)\n'
        }
      </SyntaxHighlighter>

      <p>Notar que en el ejemplo estamos usando <code>raise</code> para básicamente lanzar error si se pasa un método incorrecto (que no estemos dando soporte).
      La función retornará un objeto de tipo <code>Response</code>. Luego podemos hacer una petición a la API, usando nuestra función:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          '# GET\n'
          + 'response = beer_request("GET")\n'
          + 'response.raise_for_status()\n'
          + 'beer = json.loads(response.text)\n'
          + 'print(beer)\n'

        }
      </SyntaxHighlighter>

      <p>Primero enviamos una petición <code>GET</code> al servidor. Luego analizamos la respuesta, el método <code>raise_for_status</code> básicamente
      chequea el <code>status_code</code> de la respuesta y si es distinto de <code>20X</code>, se lanzará un error. Finalmente, como la respuesta es
      un <code>JSON</code>, se extrae el texto de la respuesta y se carga en un diccionario en python, utilizando <code>json.loads</code>, que lo que
      hace es, toma un <code>string</code> que represente un <code>JSON</code> y lo transforma a un diccionario en python:</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "'[{'id': 26, 'name': 'Skull Candy', 'tagline': 'Pacific Hopped Amber Bitter.', 'first_brewed': '02/2010', 'description': 'The first beer that we brewed on our newly commissioned 5000 litre brewhouse in Fraserburgh 2009. A beer with the malt and body of an English bitter, but the heart and soul of vibrant citrus US hops.', 'image_url': 'https://images.punkapi.com/v2/keg.png', 'abv': 3.5, 'ibu': 33, 'target_fg': 1012, 'target_og': 1038, 'ebc': 50, 'srm': 25, 'ph': 4.4, 'attenuation_level': 68.4, 'volume': {'value': 20, 'unit': 'litres'}, 'boil_volume': {'value': 25, 'unit': 'litres'}, 'method': {'mash_temp': [{'temp': {'value': 65, 'unit': 'celsius'}, 'duration': 75}], 'fermentation': {'temp': {'value': 19, 'unit': 'celsius'}}, 'twist': None}, 'ingredients': {'malt': [{'name': 'Extra Pale', 'amount': {'value': 2.81, 'unit': 'kilograms'}}, {'name': 'Caramalt', 'amount': {'value': 0.63, 'unit': 'kilograms'}}, {'name': 'Crystal 120', 'amount': {'value': 0.31, 'unit': 'kilograms'}}], 'hops': [{'name': 'Cascade', 'amount': {'value': 25, 'unit': 'grams'}, 'add': 'start', 'attribute': 'bitter'}, {'name': 'Cascade', 'amount': {'value': 18.8, 'unit': 'grams'}, 'add': 'end', 'attribute': 'flavour'}, {'name': 'Centennial', 'amount': {'value': 18.8, 'unit': 'grams'}, 'add': 'end', 'attribute': 'flavour'}, {'name': 'Amarillo', 'amount': {'value': 25, 'unit': 'grams'}, 'add': 'end', 'attribute': 'flavour'}, {'name': 'Simcoe', 'amount': {'value': 31.3, 'unit': 'grams'}, 'add': 'end', 'attribute': 'flavour'}], 'yeast': 'Wyeast 1056 - American Ale™'}, 'food_pairing': ['Haggis bon bons', 'Rosemary and lemon roast chicken', 'Oatmeal and cranberry cookies'], 'brewers_tips': \"Make sure your hops are well broken up and mixed in when added to the kettle for aroma additions. The wort is not boiling so is not agitating the hops to allow mixing. If the hops aren't steeped properly in the wort you won't get the maximum flavour impact.\", 'contributed_by': 'Sam Mason <samjbmason>'}]"
        }
      </SyntaxHighlighter>

      <p>Ahora supongamos que queremos consultar todas las cervezas que existen en la base de datos del servidor, pero también nos gustaría filtrar
      por algún criterio. De la documentación, se observa que pasándole <code>query params</code> a la <code>url</code> podemos filtrar en base a alguna
      de las propiedades de la cerveza. Para implementar lo mencionado, podemos definir la siguiente función:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'def get_beers(query=None):\n'
          + '    url = API_URL\n'
          + '    return requests.get(url, params=query)\n'

        }
      </SyntaxHighlighter>

      <p>Notar que podríamos haber modificado la <code>url</code>, agregando query params vía: <code>?param1=value&param=2</code>, pero eso es un poco
      sozo de hacer, además que la biblioteca <code>requests</code> maneja eso por nosotros. La forma correcta y elegante de hacerlo, es usando el
      parámetro <code>params</code> de las requests, el cual llenará el query string por nosotros. Como ejemplo, supongamos que queremos las cervezas
      con el IBU mayor que 90, para ello, de la documentación observamos que tenemos que usar el parámetro <code>ibu_gt</code>, además queremos contar
      la cantidad de cervezas que cumplen este criterio, luego:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          '# Cervezas con IBU > 90\n'
          + 'response = get_beers({"ibu_gt": "90"})\n'
          + 'response.raise_for_status()\n'
          + 'beers = json.loads(response.text)\n'
          + 'print(len(beers))\n'
          + 'print(beers[0])\n'
        }
      </SyntaxHighlighter>

      <p>Finalmente obtenemos de salida (por espacio sólo mostramos la primera cerveza de las 25 de la lista):</p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "25\n"
          + "{'id': 17, 'name': 'AB:06', 'tagline': 'Imperial Black IPA.', 'first_brewed': '04/2011', 'description': 'Our sixth Abstrakt, this imperial black IPA combined dark malts with a monumental triple dry-hop, using an all-star team of some of our favourite American hops. Roasty and resinous.', 'image_url': 'https://images.punkapi.com/v2/17.png', 'abv': 11.2, 'ibu': 150, 'target_fg': 1013, \n"
          + "'target_og': 1098, 'ebc': 70, 'srm': 35, 'ph': None, 'attenuation_level': 87, 'volume': {'value': 20, 'unit': 'litres'}, 'boil_volume': {'value': 25, 'unit': 'litres'}, 'method': {'mash_temp': \n"
          + "[{'temp': {'value': 65, 'unit': 'celsius'}, 'duration': 90}], 'fermentation': {'temp': {'value': 17, 'unit': 'celsius'}}, 'twist': 'White cane sugar: 150g at middle'}, 'ingredients': {'malt': [{'name': 'Pale Ale', 'amount': {'value': 6.13, 'unit': 'kilograms'}}, {'name': 'Crystal 150', 'amount': {'value': 0.25, 'unit': 'kilograms'}}, {'name': 'Caramalt', 'amount': {'value': 0.38, 'unit': 'kilograms'}}, {'name': 'Carafa Special Malt Type 1', 'amount': {'value': 0.13, 'unit': 'kilograms'}}, {'name': 'Carafa Special Malt Type 3', 'amount': {'value': 0.13, 'unit': 'kilograms'}}], 'hops': [{'name': 'Hop Extract', 'amount': {'value': 20, 'unit': 'grams'}, 'add': 'start', 'attribute': 'bitter'}, {'name': 'Amarillo', 'amount': {'value': 25, 'unit': 'grams'}, 'add': 'start', 'attribute': 'bitter'}, {'name': 'Chinook', 'amount': {'value': 25, 'unit': 'grams'}, 'add': 'end', 'attribute': 'flavour'}, {'name': 'Cascade', 'amount': {'value': 25, 'unit': 'grams'}, 'add': 'end', 'attribute': 'flavour'}, {'name': 'Centennial', 'amount': {'value': 25, 'unit': 'grams'}, 'add': 'end', 'attribute': 'flavour'}, {'name': 'Columbus', 'amount': {'value': 25, 'unit': 'grams'}, 'add': 'end', 'attribute': 'flavour'}, {'name': 'Chinook', 'amount': {'value': 25, 'unit': 'grams'}, 'add': 'dry hop', 'attribute': 'aroma'}, {'name': 'Cascade', 'amount': {'value': 25, 'unit': 'grams'}, 'add': 'dry hop', 'attribute': 'aroma'}, {'name': 'Centennial', 'amount': {'value': 25, 'unit': 'grams'}, 'add': 'dry hop', 'attribute': 'aroma'}, {'name': 'Columbus', 'amount': {'value': 25, 'unit': 'grams'}, 'add': 'dry hop', 'attribute': 'aroma'}, {'name': 'Amarillo', 'amount': {'value': 25, 'unit': 'grams'}, 'add': 'dry hop', 'attribute': 'aroma'}], 'yeast': 'Wyeast 1272 - American Ale II™'}, 'food_pairing': ['Coffee dusted venison loin', 'Memphis-style beef short ribs', 'Chocolate orange brownies'], 'brewers_tips': 'Boil down to desired OG (about 17 litres).', 'contributed_by': 'Sam Mason <samjbmason>'}\n"
        }
      </SyntaxHighlighter>

      <h4>Ejemplo práctico con autenticación</h4>

      <p>Para repasar, pueden probar jugar con APIs que requieran autenticación. Por ejemplo, vamos a la API de Zomato, la cual pueden encontrar
      en el siguiente enlace: <a href="https://developers.zomato.com/api" without rel="noopener noreferrer" target="_blank">API Zomato</a>. Pueden
      registrarse para obtener una <code>api_key</code>. Luego pueden revisar la documentación de la API, para ver cómo se utiliza y qué
      tipo de peticiones hacer. Supongamos que queremos utilizar el punto de acceso <code>/cities</code>. De la documentación, podemos ver
      que bastaría enviar una petición <code>GET</code> a dicho punto de acceso, pero la petición en el <code>header</code> debe contener nuestra
      API key. Además, la API soporta otros parámetros, supongamos que queremos buscar la ciudad <code>Santiago Chile</code>, para ello deberíamos
      pasarle el parámetro <code>q</code> a la petición. Todo lo mencionado se puede implementar como sigue:</p>

      <SyntaxHighlighter language="python" style={docco}>
        {
          'import json\n'
          + 'import requests\n'
          + '\n'
          + '\n'
          + 'API_BASE_URL = "https://developers.zomato.com/api/v2.1"\n'
          + 'API_KEY = "<AQUÍ PONER SU API KEY>"\n'
          + '\n'
          + '\n'
          + 'def get_cities(headers=None, params=None):\n'
          + '    url = f"{API_BASE_URL}/cities"\n'
          + '    return requests.get(url, headers=headers, params=params)\n'
          + '\n'
          + '\n'
          + '# Notar como pasé la API_KEY a headers para la petición HTTP\n'
          + '# En otros casos podría ir en el payload (como data) o a veces como params, depende de la API\n'
          + 'response = get_cities(headers={"user-key": API_KEY}, params={"q": "Santiago Chile"})\n'
          + 'response.raise_for_status()\n'
          + 'cities = json.loads(response.text)\n'
          + 'print(cities) \n'
        }
      </SyntaxHighlighter>

      <p>Como resultado se obtiene: </p>

      <SyntaxHighlighter language="shell" style={docco}>
        {
          "{'location_suggestions': [{'id': 83, 'name': 'Santiago', 'country_id': 42, 'country_name': 'Chile', \n"
          + "'country_flag_url': 'https://b.zmtcdn.com/images/countries/flags/country_42.png', 'should_experiment_with': 0, \n"
          + "'has_go_out_tab': 0, 'discovery_enabled': 0, 'has_new_ad_format': 0, 'is_state': 0, 'state_id': 0, 'state_name': '', \n"
          + "'state_code': ''}], 'status': 'success', 'has_more': 0, 'has_total': 0, 'user_has_addresses': True}\n"
        }
      </SyntaxHighlighter>


      <h3>Tips para Desafíos</h3>
      <h4>Ventas</h4>
      <ol>
        <li>Recuede cómo iterar pythónicamente en un diccionario y use la clave-valor de forma adecuada.</li>
        <li>Idem al punto 1.</li>
        <li>Puede generar el nuevo diccionario iterando sobre el diccionario original.</li>
        <li>¿Recuerdan el ejemplo de la búsqueda lineal del material complementario para la semana 3?</li>
        <li>Descomponga el problema de la siguiente forma: Defina cómo operará para un <em>quarter</em>. Luego puede generar
        una lista de <em>quarters</em> y resolver el problema completo (¿cómo podría definir un quarter?)</li>
        <li>Idem a los otros ejercicios. Como tip, para testear su función con el ejemplo del enunciado (notar que también
        existen las comprensiones de <code>dict</code>):</li>
        <SyntaxHighlighter language="python" style={docco}>
          {
            'test = {\n'
            + '    key: value for key, value in zip(range(12), [20000] * 6 + [30000] * 3 + [40000] * 3)\n'
            + '}\n'
            + 'print(agrupar(test))\n'
          }
        </SyntaxHighlighter>
      </ol>
      <h4>API</h4>
      <p>Primero que todo, <b>olvídese</b> de los tips entregados en el enunciado (ya los reporté, tienen que modificarse).</p>
      <ol>
        <li>Cree una función que soporte los métodos dados por el enunciado y retorne el objeto <code>Response</code> (similar al ejemplo dado)</li>
        <li>Chequee siempre el código de estado vía <code>raise_for_status</code></li>
        <li>Para crear un usuario use método <code>POST</code>.</li>
        <li>¿Para actualizar usuario qué método debe utilizar? pista: Empieza con P.</li>
        <li>Idem a casos anteriores, usar método que empieza con D.</li>
      </ol>
    </div>
  )
}

export default withLayout(WeekFour);