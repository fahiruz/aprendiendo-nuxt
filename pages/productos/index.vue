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
      <b-table responsive striped hover :fields="fields" :items="producto"></b-table>
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
                producto
            }
        })
    },
    data(){
        return{
        fields: ['cantidad', 'nombre', 'precio']
    }
    },  

}    
</script>
