import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

import baseRouters from "./modules/base";

const routes = [...baseRouters];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth",
    };
  },
});

router.beforeEach(async (to, form, next) => {
  next();
});

export default router;
