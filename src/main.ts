import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/main.css";

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
