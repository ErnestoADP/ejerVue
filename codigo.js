const app = new Vue({
    el: "#main",
    data: {
        texto: "  "
    }

})

const app1 = new Vue({
    el: "#main2",
    data: {
        conectado: false,
        edad: 19,
        listado: ["Ernesto", "Andres", "Daniela", "Andrea"],
        listado2: [
            { nombre: "Ernesto", edad: 28 },
            { nombre: "Andres", edad: 39 },
            { nombre: "Daniela", edad: 29 },
            { nombre: "Andrea", edad: 30 },
            { nombre: "Helena", edad: 11 }
        ]


    }

})