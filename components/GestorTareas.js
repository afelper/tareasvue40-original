Vue.component('GestorTareas', {
    template: `
    <div>
        <section>
            <form v-on:submit.prevent="agregarTarea">
                <div class="mb-3">
                    <label form="ingresarTarea" class="form-label">Agregar tarea</label>
                    <input type="text" class="form-control" id="ingresarTarea" aria-describedby="emailHelp"
                        v-model="nuevaTarea">
                    <div id="emailHelp" class="form-text">Ingrese el nombre de su tarea y presione agregar</div>
                    <button type="button" class="btn btn-primary w-100" @click.prevent="agregarTarea">Agregar
                        tarea</button>
                </div>
            </form>
        </section>

        <!-- pintar tareas -->
        <section class="mt-5">
            <!-- cabecera de la "tabla" de tareas -->
            <div class="row alert alert-light text-center align-items-center" role="alert">
                <div class="col-12 col-md-4">
                    <span>
                        Nombre
                    </span>
                </div>
                <div class="col-12 col-md-4">
                    <span>
                        Estado
                    </span>
                </div>
                <div class="col-12 col-md-4">
                    <span>
                        Acciones
                    </span>
                </div>
            </div>

            <div 
                v-for="(item, index) in tareas" 
                :key="index"
                :class="['row', 'alert', 'text-center', 'align-items-center', item.estado? 'alert-primary' : 'alert-warning']"
                role="alert">
                <div class="col-12 col-md-4">
                    <span>
                        {{item.nombre}}
                    </span>
                </div>
                <div class="col-12 col-md-4">
                    <span>
                        {{item.estado? 'Realizada' : 'Pendiente'}}
                    </span>

                </div>
                <div class="col-12 col-md-4">
                    <button 
                        class="btn btn-success btn-sm" 
                        @click="cambiarEstado(index)">
                       Cambiar estado</button>
                    <button 
                       class="btn btn-danger btn-sm" 
                       @click="eliminarNota(index)">
                      Eliminar</button>
                </div>
            </div>
        </section>
    </div>
    `,
    data(){
        return{
            nuevaTarea: '',
            tareas: []
        }
    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            //console.log(this.nuevaTarea)
            this.nuevaTarea = '';
            localStorage.setItem('tareasVue', JSON.stringify(this.tareas));
        },
        cambiarEstado(index){
            this.tareas[index].estado = !this.tareas[index].estado;
            localStorage.setItem('tareasVue', JSON.stringify(this.tareas));
        },
        eliminarNota(index){
            this.tareas.splice(index,1);
            localStorage.setItem('tareasVue', JSON.stringify(this.tareas));
        }
    },
    created(){
        let data = JSON.parse(localStorage.getItem('tareasVue'));
        if(data){
            this.tareas = data;
        }else{
            this.tareas = [];
        }
    }
});