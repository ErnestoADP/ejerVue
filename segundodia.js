const nombre = new Vue({
    el: "#main",
    data: {
        tarea: null,
        tareas: [
            "Aprender Vue",
            "Mejorar en CSS",
            "Aprender mas Vue",
            "Estudiar mas Vue"
        ]


    },

    methods: {
        agregarTarea() {
            this.tareas.unshift(this.tarea)

        }
    }

})