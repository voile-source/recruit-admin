/*
 * @Descripttion:
 * @version:
 * @Author: volit
 * @Date: 2022-11-14 22:16:54
 * @LastEditors: volit
 * @LastEditTime: 2022-12-14 16:53:01
 */
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";
import TDesign from "tdesign-vue-next";

import "tdesign-vue-next/es/style/index.css";
import "@/style/variables.less";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(TDesign);
app.mount("#app");
