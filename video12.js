const app = new Vue({
    el: '#main',
    data: {
        personas: []
    },

    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((respuesta = T) => {
                console.log(respuesta.data)
                this.personas = respuesta.data
            })
    }





})