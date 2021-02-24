const nombre = new Vue({
    el: "#main",
    data: {
        tarea: null,
        tareas: [
            { titulo: 'Aprender Vue.js', completado: true },
            { titulo: 'Aprender css', completado: false },
            { titulo: 'Aprender js', completado: true },
            { titulo: "Aprender html5", completado: false },
            { titulo: "Aprender mas Vue.js", completado: false },
            { titulo: "Aprender y mas Vue.js", completado: false }
        ]
    },

    methods: {
        agregarTareas() {
            this.tareas.unshift({ titulo: this.tarea, completado: false })
        }

    },

    computed: {
        mostrarCompletadas() {
            return this.tareas.filter(item => item.completado)

        },

    }

})