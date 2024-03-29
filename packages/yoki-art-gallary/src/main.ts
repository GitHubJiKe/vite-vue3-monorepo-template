import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.less";
import "virtual:uno.css";
// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
