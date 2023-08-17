import {
  Branch24Regular,
  AppsListDetail24Regular,
  ChartPerson24Regular,
} from "@vicons/fluent";

const routes = [
  {
    // 账户管理表，分为三个子路由，使用cardTabs渲染路由
    path: "/role",
    name: "role",
    redirect: "/role/list",
    meta: {
      subtitle: "管理各个账号的角色分配",
    },
    component: () => import("~/components/cardTabs.vue"),
    children: [
      {
        path: "list",
        component: () => import("@/views/user/tabs/list/index.vue"),
        name: "角色列表",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show:lazy",
        },
      },
      {
        path: "info",
        component: () => import("@/views/user/tabs/info/index.vue"),
        name: "用户角色分配",
        meta: {
          icon: ChartPerson24Regular,
          display: "show:lazy",
        },
      },
      {
        path: "chart",
        component: () => import("@/views/user/tabs/chart/index.vue"),
        name: "权限列表",
        meta: {
          icon: Branch24Regular,
          display: "show:lazy",
        },
      },
    ],
  },
];

export default routes;
