import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./i18n";
import App from "./App.vue";
import "./assets/main.css";

const pinia = createPinia();

createApp(App).use(pinia).use(i18n).mount("#app");
