/*
 * @Descripttion:
 * @version:
 * @Author: volit
 * @Date: 2022-11-15 10:36:35
 * @LastEditors: volit
 * @LastEditTime: 2022-12-14 16:56:49
 */
import router from "../router/index";

export default class Util {
  static to(url: string, params?: any) {
    router.push({ path: url, query: params });
  }
  static query() {
    return router.currentRoute.value.query;
  }
  static return() {
    router.go(-1);
  }
  static currentRoute() {
    return router.currentRoute.value;
  }
}
