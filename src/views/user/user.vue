<template>
  <cardTabs :tabsConfig="tabsConfig" />
</template>


<script lang="ts" setup>
import cardTabs from "~/components/cardTabs.vue";
import { Branch24Regular, AppsListDetail24Regular, ChartPerson24Regular } from '@vicons/fluent';
import list from "./tabs/list/index.vue";
import form from "./tabs/form/index.vue";
import chart from "./tabs/chart/index.vue";


const tabsConfig = {
  subtitle: '管理实验室账户基本信息',
  pages: [
    {
      name: "用户基本信息",
      icon: AppsListDetail24Regular,
      "display": "",
      component: list
    },
    {
      name: "用户信息",
      icon: ChartPerson24Regular,
      "display": "show:lazy",
      component: form
    },
    {
      name: "组织图",
      icon: Branch24Regular,
      "display": "show:lazy",
      component: chart
    },
  ]
}


</script>

<style scoped></style>