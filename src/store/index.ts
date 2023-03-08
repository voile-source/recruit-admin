/*
 * @Descripttion: 
 * @version: 
 * @Author: volit
 * @Date: 2022-11-14 22:20:53
 * @LastEditors: volit
 * @LastEditTime: 2022-11-17 16:23:32
 */
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia();
store.use(piniaPluginPersistedstate);

export default store;