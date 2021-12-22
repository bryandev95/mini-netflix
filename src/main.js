import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import Landing from "pages/Landing";
import Detail from "pages/Detail";

import store from "store";

import App from "./App.vue";

const routes = [
  { path: "/", name: "Landing", component: Landing },
  { path: "/movie/:id", name: "Detail", component: Detail },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
