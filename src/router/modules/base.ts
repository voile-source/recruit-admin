/*
 * @Descripttion:
 * @version:
 * @Author: volit
 * @Date: 2022-11-14 22:22:25
 * @LastEditors: volit
 * @LastEditTime: 2022-11-20 00:17:35
 */
import main from "./main";

export default [
  {
    path: "/main",
    name: "main",
    redirect: "/dashboard",
    component: () => import("@/views/main/index.vue"),
    children: main,
  },
  {
    path: "/",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
];
