import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Customers from "../views/Customers.Vue";

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/customers', component: Customers },
];
const router = createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;