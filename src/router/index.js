import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Offer from "../views/Offer.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/offer', component: Offer },
];
const router = createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;