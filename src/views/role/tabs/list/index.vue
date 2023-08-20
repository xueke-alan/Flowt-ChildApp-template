<template>
  <!-- <headerBar></headerBar> -->
  <n-grid x-gap="12" :cols="3">
    <n-gi>
      <n-card size="small" title="角色列表">
        <roleList></roleList>
      </n-card>
    </n-gi>
    <n-gi>
      <n-card size="small" title="功能操作权限">
        <span>页面级别的权限，控制页面是否对角色可见</span>
        <premissTree></premissTree>
      </n-card>
    </n-gi>
    <n-gi>
      <n-card size="small" title="数据权限">
        <span>页面级别的权限，控制页面是否对角色可见</span>
        <premissTree></premissTree>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script lang="ts" setup>
import { NGrid, NGi, NCard } from "naive-ui";
import roleList from "./list.vue";
import premissTree from "./premisss_tree.vue";
import headerBar from "./headerBar.vue";
</script>