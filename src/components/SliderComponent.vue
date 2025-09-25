<script setup>
import batman from "../assets/images/batman.jpg";
import avatar from "../assets/images/avatar.jpg";
import dune from "../assets/images/dune.jpg";
import open from "../assets/images/open.jpg";
import { onMounted, ref } from 'vue'
//background sliider
const sliderContent = [batman, avatar, dune,open];
const sliderContainer= ref(null);
let x = 0;
function slider() {
  if (sliderContainer.value) {     
    sliderContainer.value.style.backgroundImage = `url(${sliderContent[x]})`;
    x++;
    if (x >= sliderContent.length) x = 0;
  }
}
onMounted(() => {
  slider();                  
  setInterval(slider, 4000);  
});
</script>

<template>
    <section class="slider-container" ref="sliderContainer">
    <!--slder con temporizador-->
  </section>
<!--<div class="slider">
      <h1 class="titulo">Movies</h1>
      <h2>Información de tus peliculas favoritas</h2>
    </div>-->
</template>

<style scoped>
.slider-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-image: linear-gradient(rgba(41, 19, 19, 0.1));
  background-repeat: no-repeat;
  background-size:cover ;
  background-position: center;
  transition: all 0.9s ease;
}
</style>