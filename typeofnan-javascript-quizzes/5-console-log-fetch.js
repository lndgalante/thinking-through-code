/*

Challenge:
  Console log fetch

Descripción:
  Qué se muestra por pantalla cuando tratamos de realizar un console.log de fetch?

Posibles opciones:
  - La función fetch
  - Un error de referencia
  - Depende según el ambiente que estemos corriendo

------------------------------------------------------------

Conceptos a entender:
  1. Qué son los engines?

  2. Qué son los ambientes?
      a. Tipos de ambientes
      b. Diagrama de APIs de JavaScript, del Navegador, de Node.js y Deno

  3. Creemos dos funciones para conocer en qué ambiente nos encontramos
      a. isNode()
      b. isBrowserOrDeno()

  4. Solución

------------------------------------------------------------

Extra:
  - Qué librerías de terceros similares a fetch existen en Node.js?
    - node-fetch https://www.npmjs.com/package/node-fetch

  - Feature request de fetch en Node.js
      https://github.com/nodejs/node/issues/19393

  - Next.js con built-in fetch
      https://nextjs.org/docs/basic-features/supported-browsers-features#server-side-polyfills

Links:
- Desafio: https://quiz.typeofnan.dev/console-log-fetch/
- Web APIs en Deno: https://deno.land/manual@v1.6.0/runtime/web_platform_apis
- Fetch API en MDN: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- ECMA-262: https://www.ecma-international.org/publications/standards/Ecma-262.htm
- Global Object: https://developer.mozilla.org/en-US/docs/Glossary/Global_object
- Demistifying JavaScript engines: https://www.youtube.com/watch?v=vBRpoNb8EBU

*/

/*

1. Qué son los engines?
    Un engine es un programa responsable de convertir nuestro código fuente a código máquina o bytecode,
    posteriormente ejecutar este último en la CPU, además de realizar algunas pre-optimizaciones.
    Todos los engines implementan las definiciones del lenguaje que son provistas por ECMAScript.

    Siendo el engine más conocido "V8" que son utilizados en Google Chrome, Edge, Brave, Node.js y Deno,
    otros que viven en otros navegadores: SpiderMonkey en Firefox y JavaScriptCore o Nitro en Safari.

2. Qué son los ambientes?
    En el desarrollo web no usamos los engines directamente sino que estos viven dentro de un ambiente,
    que además de las APIs de JavaScript que son provistas por el engine, cada ambiente trae consigo
    su set particular de APIs que nos permiten conectar el mundo de alrededor con el engine.
    Algunos ejemplos de APIs de los ambientes son el acceso a Bluetooth o el acceso al sistema de archivos.

    a. Tipos de ambientes
        - Los navegadores (Chrome, Firefox, Safari siendo los más conocidos)
        - Node.js
        - Deno

    b. Diagrama de APIs de JavaScript, del Navegador, de Node.js y Deno

3. Creemos dos funciones para conocer en qué ambiente nos encontramos
    En todos los ambientes hay un objeto global definido, el cuál podemos utilizar para
    reconocer en que ambiente esta corriendo nuestro código.

      a. isNode()
      b. isBrowserOrDeno()

*/

function isNode() {
  return typeof global !== 'undefined';
}

function isBrowserOrDeno() {
  return typeof window !== 'undefined';
}

// console.log(`Estoy en Node.js? ${isNode() ? 'si' : 'no'}`);

// console.log(`Estoy en un navegador o en Deno? ${isBrowserOrDeno() ? 'si' : 'no'}`);

/*

4. Solución

    Posibles opciones:
      - La función fetch
      - Un error de referencia
      X Depende según el ambiente que estemos corriendo

*/

console.log(fetch);
