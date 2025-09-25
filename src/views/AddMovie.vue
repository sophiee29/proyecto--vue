<script setup>
/*import { reactive } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import { usepeliculasStore } from '../stores/ingresopeliculas';

const movieStore=usepeliculasStore();
const movie=reactive({
    title:"",
    date:0,
    
})

const handleSubmit=()=>{
    if(!movie.title||!movie.date){
        alert("rellena todos los campos");
        return;
    }

    movieStore.addMovie(movie)


     
    movie.title = "";
    movie.date = 0;
    }*/

</script>

<template>
<!--
<HeaderComponent></HeaderComponent>
<div>
    <form @submit.prevent="handleSubmit">
        <label for="title">Title</label>
        <input v-model="movie.title" type="text" id="title">

        <label for="date">Date</label>
        <input v-model="movie.date" type="number" id="date">

        <button>Enviar</button>
   
        
    </form>
</div>

-->
</template>

<style scoped>
.form{
    display: flex;
    flex-direction: column;
}
</style>