<template>
  <div class="container">

    <h1>Agregar producto nuevo</h1>

    <b-form id="product">

      <b-form-group id="items">
        <label for="imagen">Imagen</label>
        <b-form-file v-model="file" accept=".jpg, .png, .jpeg" placeholder="Inserte imagen" name="imagen" id="imagen"></b-form-file>

        <label for="nombre">Nombre</label>
        <b-form-input id="nombre" v-model="messages" required placeholder="Ingrese nombre"></b-form-input>

        <label for="precio">Precio</label>
        <b-form-input id="precio" v-model="messages" required placeholder="Ingrese valor en pesos"></b-form-input>

        <label for="cantidad">Cantidad</label>
        <b-form-input id="cantidad" v-model="messages" required placeholder="Ingrese cantidad existente"></b-form-input>
      </b-form-group>

      <b-button type="button" variant="primary" @click="guardar">Guardar</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
  </div>
</template>

<script>
let datos =  [] 

export default {
  methods: {
    guardar() {
    datos.push({ //objeto
        
            imagen: imagen.value,
            nombre: nombre.value,
            precio: precio.value,
            cantidad: cantidad.value,
            })
    
        }
  }
};
</script>