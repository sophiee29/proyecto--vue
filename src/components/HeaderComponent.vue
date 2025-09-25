<script setup>
import Home from '../views/Home.vue';
//import AddMovie from '../views/AddMovie.vue';
import {  RouterLink } from 'vue-router';
</script>
<template>

<header class="header">
    <div class="menu">
        <nav class="navegador">
            <ul class="lista">
                <!--creo enlaces con router link-->
                <li class="item">
                    <router-link class="" :to="{name:'home'}">Home</router-link><!--carga la pagina home-->
                </li>
                <li class="item"><h4 href="#">Movies</h4></li>
                <!--<li class="item">
                    <router-link class="" :to="{name:'addmovie'}">Add Movie</router-link>
                </li>
                -->
            </ul>
        </nav>
    </div>
</header>

</template>
<style scoped>

.header{
    width: 100%;
    height: 6em;
    background-color: #44c6c1;
    display: flex;
     align-items: center;
    justify-content: center;
}

.menu{
    width: 80%;
    display: flex;
    justify-content: space-between;
}
.navegador{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.lista{
    width: 80%;
    display: flex;
    justify-content: space-between;
  
    
} .item{
    font-family: "Open Sans", sans-serif;
    font-size: 1.5em;
    font-weight: 600;
    color: rgb(39, 39, 39);
    padding: 0.5em;

}
.item:hover{
    color: rgb(196, 196, 196);
}

</style>