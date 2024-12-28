import "./assets/main.css";
import "flatpickr/dist/themes/dark.css";
import "flatpickr/dist/flatpickr.min.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
