<script setup>//con composition API
import { ref } from 'vue';
import { RouterView } from 'vue-router';
//importo vistas:
import Home from './views/Home.vue';
import PeliculaInfo from './views/PeliculaInfo.vue';
import AgregarPelicula from './views/AddMovie.vue';

//creo un estado, le agrego un componente para que se muestre al inicializar
//const pageActive= ref(Home)//para que represente a una pagina

</script>

<template>
<div>
    <!--<component :is="pageActive"/>-->
    <RouterView/><!--va a mstrar inicialmente a la home-->
</div>


</template>

<style>

</style>