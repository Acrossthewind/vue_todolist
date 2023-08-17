import { createApp } from "vue";
import "@picocss/pico/css/pico.min.css";
import App from "./App.vue";
import "animate.css";
import { createPinia } from "pinia";
import piniaPlugin from "./plugins/piniaLocalStore";

const app = createApp(App);
const pinia = createPinia();

pinia.use(
  piniaPlugin({
    key: "myapp",
  })
);

//挂载pinia
app.use(pinia);

app.mount("#app");
