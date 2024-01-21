import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import "./style.css";
import App from "./App.vue";


import HomeScreen from "./pages/HomeScreen.vue";
import Test from "./pages/Test.vue";

const routes = [
  { path: "/", component: HomeScreen },
    { path: "/test", component: Test },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
