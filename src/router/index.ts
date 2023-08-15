import { baseUrl } from "../../public/qiankun.config.json";
import { createRouter, createWebHistory } from "vue-router";

import role from "@/views/role/role.vue";
import permission from "@/views/permission/permission.vue";

import list from "@/views/user/tabs/list/index.vue";
import info from "@/views/user/tabs/info/index.vue";
import chart from "@/views/user/tabs/chart/index.vue";

import renderModel from "~/views/render-model.vue";
import cardTabs from "~/components/cardTabs.vue";

import {
  Branch24Regular,
  AppsListDetail24Regular,
  ChartPerson24Regular,
} from "@vicons/fluent";

const routes = [
  {
    // 账户管理表，分为三个子路由，使用cardTabs渲染路由
    path: "/user",
    name: "user",
    component: renderModel,
    redirect: "/user/list",
    props: {
      path: `/${baseUrl}/user`,
      model: cardTabs,
    },
    meta: {
      subtitle: "管理实验室账户基本信息",
    },
    children: [
      {
        path: "list",
        component: list,
        name: "用户列表",
        meta: {
          icon: AppsListDetail24Regular,
          display: "",
        },
      },
      {
        path: "info",
        component: info,
        name: "用户信息",
        meta: {
          icon: ChartPerson24Regular,
          display: "show:lazy",
        },
      },
      {
        path: "chart",
        component: chart,
        name: "组织图",
        meta: {
          icon: Branch24Regular,
          display: "show:lazy",
        },
      },
    ],
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
  if (r.redirect) {
    r.redirect = `/${baseUrl}${r.redirect}`;
  }
});

export const router = createRouter({
  history: createWebHistory(
    window["__POWERED_BY_QIANKUN__"] ? `/${baseUrl}` : "/"
  ),
  routes,
});
