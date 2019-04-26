<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h1>Listado de categorias</h1>
      </div>

      <div class="col-6">
        <b-button variant="primary" href="/categorias/crear">Nuevo</b-button>
      </div>

    </div>
    <div>
      <p class="mt-3">Página número: {{ currentPage }}</p>

      <b-table responsive striped hover :fields="fields" :items="categoria" id="list_categoria" :per-page="perPage" :current-page="currentPage" small>
        <template slot="acciones" slot-scope="row"> 
          <b-button b-col lg="4" class="pb-2" size="sm" variant="outline-success">Editar</b-button>
          <b-button b-col lg="4" class="pb-2" size="sm" variant="outline-danger" @click="eliminarCategoria(row.item.id)">Eliminar</b-button>
        </template><!--la variable debe llamarse a la variable del fields en script-->
      </b-table>
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="list_categoria"></b-pagination>
    </div>
  </div>
</template>

<script>
import { db } from '../../services/firebase'
export default{
    asyncData(){
        return db.collection("categoria").get().then((categoriaSnap)=>{//Llamar a una coleccion que recibe una cadena de texto
            let categoria =[]

            categoriaSnap.forEach((value)=>{//productosSnap es un arreglo
                categoria.push({id:value.id,...value.data()})//con data lo recuperamos y asignamos a producto
            })

            return{
                perPage: 10, //Número de páginas a mostrar
                currentPage: 1, //Desde de donde inicia la página
                categoria
            }
        })
    },
    computed: {
      rows(){
        return this.categoria.length;//VARIABLE COMPUTADA --- CÓMPUTO DE FILAS 
      }
    }, data(){
        return{
        fields: ['nombre', 'referencia', 'descripcion', 'acciones']
    };
    },
    methods:{
      eliminarCategoria(id){
        let index;
        this.categoria.map((value,key)=>{
          if(value.id==id){
            index=key;
          }
        });

        db.collection('categoria').doc(id).delete().then(()=>{
          this.categoria.splice(index,1);        

      });
    },
     

}    
};
</script>