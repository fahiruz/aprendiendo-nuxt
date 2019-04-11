<template>
  <div class="container">

    <h1>Agregar producto nuevo</h1>

    <b-form id="product" @submit.prevent="guardarProducto"><!--submit es un evento que recarga página-->

      <b-form-group id="items">
        <label for="imagen">Imagen</label>
        <b-form-file v-model="file" accept=".jpg, .png, .jpeg" placeholder="Inserte imagen" name="imagen" id="imagen"></b-form-file>

        <label for="nombre">Nombre</label>
        <b-form-input id="nombre" type="text"  v-model="form.nombre" required placeholder="Ingrese nombre"></b-form-input>

        <label for="precio">Precio</label>
        <b-form-input id="precio" type="number" v-model="form.precio" required placeholder="Ingrese valor en pesos"></b-form-input>

        <label for="cantidad">Cantidad</label>
        <b-form-input id="cantidad" type="number" v-model="form.cantidad" required placeholder="Ingrese cantidad existente"></b-form-input>
      </b-form-group>

      <b-button variant="primary" type="submit">Guardar</b-button>
      <b-button type="submit" variant="danger">Limpiar</b-button> 
    </b-form>
  </div>
</template>

<script>
  import { db } from '../../services/firebase'
    export default{
      data(){
        return{
          form: {
            nombre: '',
            cantidad: '',
            precio: ''
          }
          
        }
      },
      methods: {
        guardarProducto(){
          db.collection("producto").add(this.form).then(res =>{//.then permite que se ejecute
            this.$router.push({//PAra volver a productos
              path: "/productos"
            })
          }) //add recibe un objeto de lo que vamos a agregar
        }
      }
    }
</script>