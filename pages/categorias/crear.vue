<template>
  <div class="container">

    <h1>Agregar categoría nueva</h1>

    <b-form id="product" @submit.prevent="guardarCategoria"><!--submit es un evento que recarga página-->

      <b-form-group id="items">
        
        <label for="nombre">Nombre</label>
        <b-form-input id="nombre" type="text"  v-model="form.nombre" required placeholder="Ingrese nombre"></b-form-input>

        <label for="referencia">Referencia</label>
        <b-form-input id="referencia" type="text" v-model="form.referencia" required placeholder="Ingrese referencia"></b-form-input>

        <label for="descripcion">Descripción</label>
        <b-form-input id="descripcion" type="text" v-model="form.descripcion" required placeholder="Ingrese descripción de categoría"></b-form-input>
      </b-form-group>

      <b-button variant="primary" type="submit" :disabled="guardando">Guardar</b-button>
      <b-button type="submit" variant="danger">Limpiar</b-button> 
    </b-form>
    <b-spinner  v-if="guardando" type = "grow"  label = "Cargando ..." > </b-spinner > 
  </div>
</template>

<script>
  import { db } from '../../services/firebase'
    export default{
      data(){
        return{
          form: {
            nombre: '',
            referencia: '',
            descripcion: ''
          },
          guardando:false,
          
        }
      },
      methods: {
        guardarCategoria(){
          this.guardando=true
          db.collection("categoria").add(this.form).then(res =>{//.then permite que se ejecute
            this.$router.push({//PAra volver a productos
              path: "/categorias"
            })
          }) //add recibe un objeto de lo que vamos a agregar
        }
      }
    }
</script>