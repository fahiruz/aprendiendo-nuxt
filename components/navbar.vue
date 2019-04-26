<template>
  <!--<div>
        <a href="/">Inicio</a>
        <a href="/contacto">Contacto</a>
  </div>-->

  <b-navbar variant="danger" type="dark" toggleable="lg">
    <b-navar-brand href="/">BoostrapVue</b-navar-brand>
    <b-navbar-toggle target="menu"></b-navbar-toggle> <!--Botón de menú-->

    <!--Items-->
    <b-collapse is-nav id="menu">  <!--Lista que se colpasa o se vuelve grande-->
        <b-navbar-nav>
            <b-nav-item href="/contacto">Contacto</b-nav-item>
            <b-nav-item href="/productos">Productos</b-nav-item>
            <b-nav-item href="/categorias">Categorias</b-nav-item>
        </b-navbar-nav>
    </b-collapse>

    
  </b-navbar>
</template>

<script>
export default {};
</script>

