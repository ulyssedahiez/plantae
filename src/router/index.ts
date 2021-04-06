import { createRouter, createWebHashHistory } from 'vue-router';
import PanneauHeader from '../components/PanneauHeader.vue';
import Profil from '../components/user/Profil.vue';
import Presentation from '../components/home/Presentation.vue';
import Map from '../components/marketMap/Map.vue';


const routes = [
  {
    path: '/',
    component: PanneauHeader,
  },
  {
    path: '/user/profil',
    component: Profil,
  },
  {
    path: '/home/presentation',
    component: Presentation,
  },

  {
    path: '/marketmap/map',
    component: Map,
  },

  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;