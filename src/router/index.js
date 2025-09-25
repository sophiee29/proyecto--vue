import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import AgregarPelicula from "../views/AddMovie.vue";
import AddMovie from "../views/AddMovie.vue";
import PeliculaInfo from "../views/PeliculaInfo.vue";

const router=createRouter({//objeto con 2 propiedades
    history:createWebHashHistory(),//parametro, inicializo
    //creo array de rutas(por pagina)
    routes: [//creo variable
        {
            path: "/",
            name:"home",
            component: Home
        },
        {
            path:"/AddMovie",
            name:"addmovie",
            component:AddMovie
        },
        {
            path:"/movie/:id/detalle",//variable id
            name:"movie",
            component:PeliculaInfo
        }
    ]
})

export default router;