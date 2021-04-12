import Model from './model.js'
import View from './view.js'

document.addEventListener('DOMContentLoaded', () => {
    const model = new Model() // Inicializamos la Clase Model
    const view = new View() // Inicializamos la Clase View
    // Para insertar el objeto View dentro de la clase Model
    model.setView(view) // Llamamos a la funcion "setView(view)"
    // Para insertar el objeto Model dentro de la clase View
    view.setModel(model) // Llamamos a la funcion "setModle(model)"
})
