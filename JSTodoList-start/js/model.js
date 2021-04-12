
/* Para importar esta clase "Model" para poder usarla en otra casa, debemos
poner antes de "class" un "export default" */
export default class Model {
    constructor() {
        this.view = null
        this.todos = [] // almacenara los registros para la BD del Navegador "localStorage"
        this.currentId = 1 // actual id, el cual inicializamos
    }

    setView(view) {
        this.view = view
    }

    getTodos() {
        return this.todos
    }

    /* Validamos el id y retornamos si lo encuentra */
    findTodo(id){
        /* Buscamos el id con ayuda del metodo "findIndex()", donde dentro de el
        compararemos el campo con la clave "id" del "todos" con el id obtenido
        del parametro de "findTodo(p1)" */
        return this.todos.findIndex((todo) => todo.id === id)
    }

    /* Para cambiar de false a true o biseversa la columna "completed" cuando
    seleccionemos o deseleccionemos el "input" tipo "checkbox" */
    toggleCompleted(id) {
        const index = this.findTodo(id) // buscamos y obtenemos el id si lo encuentra
        const todo = this.todos[index]; // obtenemos el elemento con la posicion de index
        // cambiamos el valor de tru o false a lo contrario de ellos, del campo con la clave "completed"
        todo.completed = !todo.completed 
        console.log(this.todos);
    }

    /* Agrega los campos del formulario registrados por medio de la pagina */
    addTodo(title, description) {
        /* objeto para guardar cada campo */
        const todo = {
            id: this.currentId++, // identificador incrementable
            // no ponemos "title: title" ya que asginamos el mismo nombre, entonces no es necesario
            title, 
            description,
            completed: false  // campo para el "checkbox" de la etiqueta "input"
        }
        this.todos.push(todo) // pasamos el objeto "todo" al arreglo "todos"
        console.log(this.todos);

        /* OPCION 1 DE COMO HACER UN CLON DE UN OBJETO
         Para que no cambien u obtengan datos directamente del objeto,
        Object.assgign({}, objeto_original) --> copia todas las propiedades 
        enumerables de uno o más objetos fuente a un objeto destino. 
        Las llaves que estan como 1° parametro, son para indicar un arreglo temporal*/
        // return Object.assign({}, todo) // Devuelve el objeto destino. 

        /* OPCION 2 DE COMO HACER UN CLON DE UN OBJETO */
        return {...todo}
    }

    /* Borra una fila */
    removeTodo(id) {
        const index = this.findTodo(id)
        /* Borramos desde la posicion del valor de "index" y el parametro 2
        para indicar cuantos elementos borraremos apartir del indice "index" */
        this.todos.splice(index, 1) // borra los registros del arreglo borrados de la pagina web
    }

}