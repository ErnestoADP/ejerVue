const app = new Vue({
    el: '#main',
    data: {
        mostrar: false,
        tareas: [
            { titulo: 'titulo tarea 1', completado: false },
            { titulo: 'titulo tarea 2', completado: false },
            { titulo: 'titulo tarea 3', completado: false },
            { titulo: 'titulo tarea 4', completado: false },
            { titulo: 'titulo tarea 5', completado: false },
            { titulo: 'titulo tarea 6', completado: false },
            { titulo: 'titulo tarea 7', completado: false },
            { titulo: 'titulo tarea 8', completado: false },
            { titulo: 'titulo tarea 9', completado: false },
            { titulo: 'titulo tarea 10', completado: false },
            { titulo: 'titulo tarea 11', completado: false },
            { titulo: 'titulo tarea 12', completado: false },
            { titulo: 'titulo tarea 13', completado: false }

        ]

    },
    methods: {
        completarTarea(tarea) {
            tarea.completado = !tarea.completado

        },
        btnMostrar() {
            this.mostrar = !this.mostrar
        }
    }


})