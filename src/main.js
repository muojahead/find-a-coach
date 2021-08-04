import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import ButtonBase from "./components/Bases/Button.vue";
import PageTitle from "./components/Bases/PageTitle.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("button-base", ButtonBase);
app.component("page-title", PageTitle);
app.mount("#app");