/* AQUI SE MANEJARA LA TABLA */

import AddTodo from './components/add-todo.js'

/* Para importar esta clase "View" para poder usarla en otra casa, debemos
poner antes de "class" un "export default" */
export default class View {
    constructor() {
        /* estamos creando estas variables con "this.", lo cual no hace 
        el tener que poner un tipo de variable */
        this.model = null
        this.table = document.getElementById('table') // conectamos con la tabla
        this.addTodoForm = new AddTodo() // Inicializamos la clase AddTodo()

        /* llamamos la funcion "onClick(callback)" que creamos dentro de la clase "AddTodo()",
        donde dentro creamos una funcion indefinida para poder llamar dentro de ella
        la funcion "addTodo(p1, p2)" que creamos en esta clase "View" */
        this.addTodoForm.onClick((title, description) => { this.addTodo(title, description) })
    }

    setModel(model) {
        this.model = model;
    }

    /* Agrega los campos del formulario que registremos en la pagina */
    addTodo(title, description) {
        /* El cual lo agrega a la misma funcion "addTodo(p1, p2)" creada dentro
        del Archivo "model.js" y en la variable "const" llamada "todo" */
        const todo = this.model.addTodo(title, description)
        /* Llamamos al metodo "createRow(p1)", agregando dentro de el, los datos
        obtenidos dentro del "todo", para MOSTRARLOS EN LA TABLA DE LA PAGINA WEB */
        this.createRow(todo)
    }

    /* Nos conextamos con el Metodo de la clase model */
    toggleCompleted(id) {
        this.model.toggleCompleted(id)
    }

    removeTodo(id) {
        // Borra los datos de la fila "id" en el arreglo y BD "localStorage"
        this.model.removeTodo(id)
        // Borra toda la etiqueta de fila <tr></tr> con el valos del atributo "id" indicado
        document.getElementById(id).remove() 
    }

    createRow(todo) {
        const row = table.insertRow() // insertamos una fila <tr> a la tabla "table"
        row.setAttribute('id', todo.id) // agrega un atributo "id" con valor de la variable incrementable "id++"
        /* Insertamos texto o etiquetas con texto dentro de ellas */
        row.innerHTML = `
        <td>${todo.title}</td>
        <td>${todo.description}</td>
        <td class="text-center">
            
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
            </button>
        </td>
        `

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        // Insertamos el "false" o "true" del "todo.completed" en el "checkbox.checked"
        checkbox.checked = todo.completed // cambiamos de seleccionado o no seleccionado el "checkbox"
        checkbox.onclick = () => {this.toggleCompleted(todo.id)}
        // insertamos en la fila "row", dentro de la posicion de su hijo [3], el boton "removeBtn"
        row.children[2].appendChild(checkbox)

        const removeBtn = document.createElement('button') // crea un <button></button>
        // crea dentro del boton el atributo "class" con los valores de clases "'btn', 'btn-danger', 'mb-1', 'ml-1'"
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1')
        // inserta esta etiqueta para agregar un icono de basura dentro del boton
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>'
        removeBtn.onclick = () => { // creamos una funcion indefinida
            /* llamamos a esta funcion dentro de la funcion indefinida para poder 
            agregar los parentesis y dentro de el el parametro "todo.id" sin que nos retorne
            solo el valor, si no que los ejecute todo el codigo dentro de esta funcion "removeTodo(p1)" */
            this.removeTodo(todo.id) // obtiene el valor del "todo.id"
        }
        // insertamos en la fila "row", dentro de la posicion de su hijo [3], el boton "removeBtn"
        row.children[3].appendChild(removeBtn)
    }
}