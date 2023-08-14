import { baseUrl } from "../../public/qiankun.config.json";

// 引入模板组件 （template）
import renderModel from "~/views/render-model.vue";
import cardTabs from "~/components/cardTabs.vue";

// 引入业务组件 （src）
import list from "@/views/user/tabs/list/index.vue";
import info from "@/views/user/tabs/info/index.vue";
import chart from "@/views/user/tabs/chart/index.vue";

// 引入图标 （xicons）
import {
  Branch24Regular,
  AppsListDetail24Regular,
  ChartPerson24Regular,
} from "@vicons/fluent";

// 导出账户管理表，分为三个子路由，使用 cardTabs 渲染路由
module.exports = [
  {
    path: "/user",
    name: "user",
    component: renderModel,
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
];
