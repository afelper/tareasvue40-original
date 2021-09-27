var app = new Vue({
    el: '#app',
    data: {
        proyecto: 'Tareas con Vue',
        grupo: 'grupo 40',
    },
    methods: {

    },
    computed: {
        titulo(){
            return this.proyecto + ' ' + '-' + ' ' + this.grupo;
        },
        textoEstado(){
            return this.tareas[this.indice].estado ? 'Realizado': 'Pendiente';
        }
    },
    
});