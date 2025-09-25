<script setup>

import { useRoute } from "vue-router";
import HeaderComponent from '../components/HeaderComponent.vue';
import { onMounted } from "vue"
import { usepeliculasStore } from '../stores/ingresopeliculas';


//const peliRetrive= ref(getpeliById(1))
const route = useRoute()
const pelistores= usepeliculasStore();
onMounted(() => {
  pelistores.getpeli()//ejecuto la funcion de ingreso de peliculas
})
</script>

<template>
<HeaderComponent></HeaderComponent>
<section class="contenedor">
<article class="section-container">
 <div class="container-info" v-if="pelistores.getpeliById(route.params.id)">
    <!--<p>ID: {{ route.params.id }}</p>-->
    <div class="datos">
        <h2 class="title">{{ pelistores.getpeliById(route.params.id).title }}</h2>
        <div class="info">
            <h3>Fecha de publicación:</h3>
            <h4 class="margintext"> {{ pelistores.getpeliById(route.params.id).year }}</h4>
        </div>
        <div class="info">
            <h3>Género:</h3>
            <h4 class="margintext"> {{ pelistores.getpeliById(route.params.id).genre }}</h4>
        </div>
        <div class="info">
            <h3>Clasificación: </h3>
             <h4 class="margintext">{{ pelistores.getpeliById(route.params.id).stars }} estrellas</h4>
        </div>
        <h3>Descripción</h3>
        <p >{{ pelistores.getpeliById(route.params.id).description }}</p>
    </div>
    <div class="imagen">
         <img  :src="pelistores.getpeliById(route.params.id).image_url" alt="" width="200">
    </div>
  </div>
</article>
</section>
</template>

<style scoped>
.contenedor{
    background-color: rgb(39, 39, 39);
    height: 100vh;
}
.imagen{
    height: 50em;
}
.margintext{
    margin-bottom: 1em;
}
.imagen img{
    object-fit: cover;
    height: 100%;
    width: 100%;
}
.section-container{
    display: flex;
    justify-content: center;
}
.container-info{
    margin-top: 4em;
    width: 90%;
    display: flex;
    justify-content: center;
}
.title{
    color:  #44c6c1;
    font-size: 3.5em;
    margin-bottom: 1.5em;
    font-family: "Open Sans", sans-serif;
}
.info{
    display: flex;
}
.datos{
    width: 40%;
    margin-right: 6em;
}
.datos h3{
    color:  #44c6c1;
    font-family: "Open Sans", sans-serif;
    font-size: 2em;
    margin-right: 0.7em;
}
.datos h4{
    color:  rgb(221, 226, 230);
    font-family: "Noto Serif", Serif;
    font-size: 2em;
    font-weight: 200;
    margin-right: 0.7em;
}
.datos p{
    font-family: "Noto Serif", Serif;
    color: rgb(221, 226, 230);
    font-size: 1.7em;
}

/*___MEDIA QUERIES*/
@media (max-width: 800px){
    .container-info{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    width: 65%;
}
.imagen{
    height: 60em;
    width: 100%;
    margin-bottom: 1.5em;
}
.imagen img{
    object-fit: cover;
    height: 100%;
    width: 100%;
}
.title{
    font-size: 1.5em;
    margin-bottom: 1.5em;
}
.datos{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 0;
}
.info{
    display: flex;
    flex-direction: column;
}
.datos h3{
    font-size: 1.3em;
}
.datos h4{
    font-size: 1.3em;
}
.datos p{
    font-size: 1.3em;
    margin-bottom: 5em;
}
.contenedor{
    background-color: rgb(39, 39, 39);
    height: 100%;
}
}
@media (max-width: 480px){
.container-info{
    display: flex;
    flex-direction: column-reverse;
    width: 96%;
}
.imagen{
    height: 60em;
    width: 100%;
    margin-bottom: 1.5em;
}
.datos h3{
    font-size: 1.5em;
}
.datos h4{
    font-size: 1.5em;
}
.datos p{
    font-size: 1.5em;
    margin-bottom: 5em;
}
.title{
    font-size: 2.3em;
    margin-bottom: 1.5em;
}
}
</style>