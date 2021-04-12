/* AQUI SE AÑADIRA COMPONENTES (ETIQUETAS HTML) */

export default class AddTodo {
    constructor() {
        this.btn = document.getElementById('add') //conectamos con el boton "add"
        this.title = document.getElementById('title')
        this.description = document.getElementById('description')
    }

    /* Funcion llamada "onCLick" para usarla cuando se de click al boton, pueda
    ejecutar una funcion dentro de ella */
    onClick(callback) {
        this.btn.onclick = () => {
            /* Validacion para que todos los campos del formularios esten llenados */
            if (title.value === '' || description.value === '') {
                // alert.innerText = 'Title and description are required' // agregamos texto dentro la etiqueta con id "alert"
                console.error('Incorrecto');
            } else {
                callback(this.title.value, this.description.value)
            }
        }
    }
}
