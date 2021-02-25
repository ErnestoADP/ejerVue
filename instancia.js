const instancia = new Vue({
    data: {

        dato: "este dato es compartido"

    }


})

const instancia2 = new Vue({
    el: "#main",
    data: {
        titulo: "instancia numero 2",
        dato: "35",
        datocompartido: instancia.dato

    }

})

const instancia3 = new Vue({
    el: "#main2",
    data: {

        titulo: "instancia numero 3",
        dato: "14",
        datocompartido: instancia.dato


    }


})