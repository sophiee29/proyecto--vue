<script setup>
import { RouterLink } from 'vue-router';
import { usepeliculasStore } from '../stores/ingresopeliculas';
import { onMounted, ref } from 'vue'
const pelistore= usepeliculasStore();
onMounted(() => {
  pelistore.getpeli()//ejecuto la funcion de ingreso de peliculas
})
</script>
<template>
  <section class="gallery-peliculas">
    <div class="cards-container"> <!--agrego evento por peli -->
      <!--siempre que use un v-for uso una key -->
        <div class="card" v-for="pelicula in pelistore.peliculas" :key="pelicula.id"><!--se agrega por pelicula, recorre el array peliculas, es ref-->
          <!--solo muestro la imagen y la peli dn la home(pongo como clave un id)-->
          <router-link :to="{name:'movie', params:{id:pelicula.id}}">
            <div class="image-film marginR overlay-container">
              <img  :src="pelicula.image_url" alt="" width="200">
              <div class="overlay ">
              </div>
            </div>
            <div class="titulo-pelicula">
                <h3 class="hover-h3">{{ pelicula.title }}</h3>
            </div> 
          </router-link>
        </div>
    </div>
  </section>
</template>

<style scoped>
.overlay-container{
  position: relative;
}
.overlay-container:hover .overlay{
    opacity:1;
  }
.overlay{
    position: absolute;
    top:0;
    left:0;
    background-color:rgba(64, 132, 145, 0.5);
    transition: 0.6s ease;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
.gallery-peliculas{
  background-color: rgb(39, 39, 39);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3em;
  padding-bottom: 3em;
}
.cards-container{
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card{
  width: 25%;
  margin: 1em;
}
.image-film{
  height: 40em;
	transition: 0.2s;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.image-film img{
  object-fit: cover;
  object-position: 30% 80%;
  height: 100%;
  width: 100%;
}
.titulo-pelicula{
background-color: rgb(48, 48, 48);
padding: 1em;
height: 7em;
display: flex;
justify-content: center;
align-items: center;

}
.titulo-pelicula:hover{
background-color:  #44c6c1;
}
.titulo-pelicula h3{
text-align: center;
font-size: 1.5em;
font-family: "Open Sans", sans-serif;
}
.hover-h3{
color: rgb(119, 119, 119);
}
.hover-h3:hover{
  color:#d2e9e8;
}
@media (max-width: 900px) {
 
  .cards-container{
  width: 95%;
 
}
  .card{
	width: 40%;
  	margin: 1em;
  }
  .titulo-pelicula h3{
    font-size: 1.3em;
  }
 .image-film{
    height: 38em;
  }
}

/*___MEDIA QUERIES*/ 
@media (max-width: 700px) {
  .cards-container{
  width: 95%;
}
  .card{
	width: 40%;
  	margin: 1em;
  }
  .titulo-pelicula{
  height: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
  }  
  .titulo-pelicula h3{
    font-size: 1.3em;

  }
 .image-film{
    height: 35em;
  }
}
@media (max-width: 480px) {
  body {
    font-size: 0.5em;
  }
  .image-film{
    height: 65em;
  }
  .cards-container{
  width: 97%;
}
  .card{
	width: 100%;
  	margin: 1em;
  }
   .titulo-pelicula{
  height: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
  }  
  .titulo-pelicula h3{
    font-size: 1.2em;
  }
}
</style>