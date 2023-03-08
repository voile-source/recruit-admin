/*
 * @Descripttion:
 * @version:
 * @Author: volit
 * @Date: 2022-11-15 19:22:10
 * @LastEditors: volit
 * @LastEditTime: 2022-12-14 14:13:23
 */
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      currentPage: 1,
      currentText: "",
      user: {},
      userList: [],
    };
  },
  actions: {
    changePage(page: number) {
      this.currentPage = page;
    },
    changeCurrentText(context: string) {
      this.currentText = context;
    },
  },

  persist: true,
});
