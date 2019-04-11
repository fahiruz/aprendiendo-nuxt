 <template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h1>Listado de Productos</h1>
      </div>

      <div class="col-6">
        <b-button variant="primary" href="/productos/crear">Nuevo</b-button>
      </div>

    </div>
    <div>
      <p class="mt-3">Página número: {{ currentPage }}</p>
      <b-table responsive striped hover :fields="fields" :items="producto" id="list_producto" :per-page="perPage" :current-page="currentPage" small></b-table>
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="list_producto"></b-pagination>
    </div>
  </div>
</template>

<script>
import { db } from '../../services/firebase'
export default{
    asyncData(){
        return db.collection("producto").get().then((productoSnap)=>{//Llamar a una coleccion que recibe una cadena de texto
            let producto =[]

            productoSnap.forEach((value)=>{//productosSnap es un arreglo
                producto.push(value.data())//con data lo recuperamos y asignamos a producto
            })

            return{
                perPage: 10, //Número de páginas a mostrar
                currentPage: 1, //Desde de donde inicia la página
                producto
            }
        })
    },
    computed: {
      rows(){
        return this.producto.length;//VARIABLE COMPUTADA --- CÓMPUTO DE FILAS 
      }
    },
    data(){
        return{
        fields: ['cantidad', 'nombre', 'precio']
    }
    },  

}    
</script>
