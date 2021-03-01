const app = new Vue({
    el: '#app',
    data: {
        tareas: [
            { titulo: "tarea 1", completados: false },
            { titulo: "tarea 2", completados: false },
            { titulo: "tarea 3", completados: false },
            { titulo: "tarea 4", completados: false },
            { titulo: "tarea 5", completados: false },
            { titulo: "tarea 6", completados: false },
            { titulo: "tarea 7", completados: false },
            { titulo: "tarea 8", completados: false },
            { titulo: "tarea 9", completados: false },
            { titulo: "tarea 10", completados: false },
            { titulo: "tarea 11", completados: false },
            { titulo: "tarea 12", completados: false }

        ]

    },

    methods: {
        completarTarea(tarea) {
            tarea.completados = !tarea.completados
        }

    }


})