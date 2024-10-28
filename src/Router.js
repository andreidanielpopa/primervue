import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import CicloVida from "./components/CicloVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";
import PropiedadConmutada from "./components/PropiedadConmutada.vue";
import NumeroParImpar from "./components/NumeroParImpar.vue";
import MetodoFilters from "./components/MetodoFilters.vue";

const myRoutes = [
    {
        path: '/', component: HomeComponent
    },

    {
        path: '/musica', component: MusicaComponent
    },
    {
        path: '/cinema', component: CineComponent
    },
    {
        path: '/ciclo', component: CicloVida
    },
    {
        path: '/directivas', component: DirectivasComponent
    },
    {
        path: '/propiedad', component: PropiedadConmutada
    },
    {
        path: '/parimpar', component: NumeroParImpar
    }
    ,
    {
        path: '/filters', component: MetodoFilters
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;