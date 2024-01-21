import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import "./style.css";
import App from "./App.vue";


import HomeScreen from "./pages/HomeScreen.vue";

const routes = [
  { path: "/", component: HomeScreen },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
