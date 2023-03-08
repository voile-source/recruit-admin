/*
 * @Descripttion:
 * @version:
 * @Author: volit
 * @Date: 2022-11-14 22:34:18
 * @LastEditors: volit
 * @LastEditTime: 2022-12-08 20:35:56
 */
import { request } from "../utils/request";

export default class User {
  /**
   * @name: 管理员登录
   * @param {Object} user
   * @return {Promise<Object>}
   */
  static async login(user: Object) {
    return request.post("admin/login", user);
  }

  static async getUserList(page: number = 1, size: number = 8) {
    return request.get("user/list", { page, size });
  }

  static async delUser(account: string) {
    return request.put("user/del", account);
  }

  static async getResult(account: string) {
    return request.get("user/result", { account });
  }

  static async search(params: object) {
    return request.get("user/search", params);
  }

  static async total() {
    return request.get("user/total");
  }
}
