import { createApp } from "vue";
import { createPinia } from "pinia"; // 1. 引入 createPinia
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./access.ts";

const app = createApp(App);
const pinia = createPinia(); // 2. 创建 pinia 实例
app.use(Antd);
app.use(pinia); // 3. 让 Vue 应用使用 pinia
app.use(router);
app.mount("#app"); //找到 index.html 中 id="app" 的元素, 把整个 App.vue 渲染进去
