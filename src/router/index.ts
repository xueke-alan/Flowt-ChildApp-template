import { baseUrl } from "../../public/qiankun.config.json";
import { createRouter, createWebHistory } from "vue-router";
import user from "../views/user.vue";
import role from "../views/role.vue";
import permission from "../views/permission.vue";

const routes = [
  {
    path: "/user",
    name: "user",
    component: user,
  },
  {
    path: "/role",
    name: "role",
    component: role,
  },
  {
    path: "/permission",
    name: "permission",
    component: permission,
  },
];

routes.forEach((r) => {
  r.path = `/${baseUrl}${r.path}`;
});

export const router = createRouter({
  history: createWebHistory(
    window["__POWERED_BY_QIANKUN__"] ? `/${baseUrl}` : "/"
  ),
  routes,
});
