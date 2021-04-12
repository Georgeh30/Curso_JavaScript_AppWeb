/*  */

/* 
Para ver la pagina html usaremos el servidor que trae NODE.JS, para ello
debemos tenerlo instalado y desde la terminal o cmd, ingresamos a la ruta
del codigo y ponemos el comando --> npm i -g serve
Para instalar el servidor que provee el NODE.JS.
serve --help --> para obtener informacion sobre el servidor y su url a usar 
serve -l 3000 --> para correr el servidor en el puerto que querramos y nos da la url
*/

/* el evento "DOMContentLoaded" se acciona al cargarse la pantalla por pirmera
o cualquier vez, hacinedo que no carge ningun codigo JS hasta que se carge 
completamente el html */

/* 
DIFERENCIA ENTRE == Y ===
== compara valor, mientras que === compara también tipo. Por ejemplo.

"1" == 1 // true
"1" === 1 // false
null == undefined // true
null === undefined // false
*/

/* 
DIFERENCIAS ENTRE FILA Y CELDA DE UNA TABLA HTML
<tr></tr> --> esto es una FILA
<td></td> --> esto es una CELDA, que va dentro de la fila

NOTA: Un <tbody></tbody> --> dentro de el va las filas y SOLO se pone una vez
      , las etiquetas que se pone varias veces indicando cada fila es <tr></tr>
      y dentro de ellas van las <td></td> el numero de veces que tenga de columnas.
*/


document.addEventListener('DOMContentLoaded', function () {

  const title = document.getElementById('title')
  const description = document.getElementById('description')
  const table = document.getElementById('table')
  const alert = document.getElementById('alert')
  const btn = document.getElementById('add');

  let id = 1;

  function removeTodo(id) {
    console.log(id);
    /* Borra el elemento o etiqueta que tenga en el atributo "id", el valor
    de la variable creada con el mismo nombre "id" */
    document.getElementById(id).remove()
  }

  /* Funcion para agregar datos */
  function addTodo() {
    /* Validacion para que todos los campos del formularios esten llenados */
    if (title.value === '' || description.value === '') {
      alert.classList.remove('d-none') // quita la clase que se llame "d-none"
      alert.innerText = 'Title and description are required' // agregamos texto dentro la etiqueta con id "alert"
      return // retornamos nada, solo para que acabe aqui la ejecucion
    }
    alert.classList.add('d-none') // agrega la clase que se llame "d-none"
    const row = table.insertRow() // insertamos una fila <tr> a la tabla "table"
    row.setAttribute('id', id++) // agrega un atributo "id" con valor de la variable incrementable "id++"
    /* Insertamos texto o etiquetas con texto dentro de ellas */
    row.innerHTML = `
      <td>${title.value}</td>
      <td>${description.value}</td>
      <td class="text-center">
        <input type="checkbox">
      </td>
      <td class="text-right">
        <button class="btn btn-primary mb-1">
          <i class="fa fa-pencil"></i>
        </button>
      </td>
    `
    const removeBtn = document.createElement('button') // crea un <button></button>
    // crea dentro del boton el atributo "class" con los valores de clases "'btn', 'btn-danger', 'mb-1', 'ml-1'"
    removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1')
    // inserta esta etiqueta para agregar un icono de basura dentro del boton
    removeBtn.innerHTML = '<i class="fa fa-trash"></i>'
    removeBtn.onclick = function (e) { // creamos una funcion indefinida
      /* llamamos a esta funcion dentro de la funcion indefinida para poder 
      agregar los parentesis y dentro de el el parametro "id" sin que nos retorne
      solo el valor, si no que los ejecute todo el codigo dentro de esta funcion */
      removeTodo(row.getAttribute('id')) // obtine el valor del atributo "id" de la fila "row"
    }
    // insertamos en la fila "row", dentro de la posicion de su hijo [3], el boton "removeBtn"
    row.children[3].appendChild(removeBtn)
  }

  /* Indica que al accionar dando click al metodo "onclick" en el boton con el
atributo "id", es cuando tenemos que llamar a la funcion "addTodo" sin los
parentesis() porque...
* asi --> addTodo(), solo obtenemos el valor del retorno de la funcion, aunque
          no este escrito el "return" por defaul tendria como valor de retorno
          el "undefined"
* y asi --> addTodo, solo la llamamos a ejecutar a la funcion para que se ejecute
            el codigo dentro de el al momento de presionar el boton */
  btn.onclick = addTodo

})
