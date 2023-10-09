import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import router from "./router";
import Vuetify from "vuetify";
import "./assets/style/style.css";
import "vuetify/dist/vuetify.min.css";

const app = createApp(App);

app.use(i18n);
app.use(router);

app.use(Vuetify);
app.mount("#app");
