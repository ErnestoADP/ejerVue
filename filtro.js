const comics = new Vue({
    el: "#main",
    data: {
        comic: null,
        nombreComic: [
            { titulo: 'Batman Silencio parte 1' },
            { titulo: 'Batman Silencio parte 2' },
            { titulo: 'Tierra Uno' },
            { titulo: "Torre de Babel" },
            { titulo: "Enemigos Públicos" },
            { titulo: "Origen Secreto" },
            { titulo: "El Círculo" },
            { titulo: "Batman e Hijo" },
            { titulo: "Preludios y Chistes Malos" },
            { titulo: "JLA Año Uno Parte 1" },
            { titulo: "JLA Año Uno Parte 2" },
            { titulo: "Primero Trueno" },
            { titulo: "Tierra Uno Parte 2" },
            { titulo: "Una Muerte En Familia" },
            { titulo: "Green Arrow Año Uno" },
            { titulo: "Los Señores De La Muerte" },
            { titulo: "Tierra 2" },
            { titulo: "La Muerte De Superman" },
            { titulo: "FlashPoint" },
            { titulo: "A La Fuga" }
        ]


    },

    methods: {
        agregarTareas() {
            this.nombreComic.unshift({ titulo: this.comic })

        }
    },

    computed: {
        filtrarNombre() {
            return this.nombreComic.filter(item => item.titulo.includes(this.comic))
        }
    }



})