import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import "./style.css";
import App from "./App.vue";


import HomeScreenPage from "./pages/HomeScreenPage.vue";
import ProgramariPage from "./pages/ProgramariPage.vue";
import DespreNoiPage from "./pages/DespreNoiPage.vue";
import ServiciiPage from "./pages/ServiciiPage.vue";
import GaleriePage from "./pages/GaleriePage.vue";

const routes = [
  { path: "/", component: HomeScreenPage },
    { path: "/programari", component: ProgramariPage },
    {path: "/despre_noi", component: DespreNoiPage },
    {path: "/servicii", component: ServiciiPage },
    {path: "/galerie", component: GaleriePage },

]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
