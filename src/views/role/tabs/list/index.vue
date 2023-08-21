<template>
  <!-- <headerBar></headerBar> -->
  <div style="display: flex;gap: 20px;height: 100%;
    overflow: hidden;">


    <n-card size="small" title="角色列表" content-style="height: 100%;overflow-y: scroll;">

      <roleList></roleList>
    </n-card>


    <n-card size="small" title="功能操作权限" content-style="height: 100%;overflow-y: scroll;">
      <span>页面级别的权限，控制页面是否对角色可见</span>
      <premissTree></premissTree>
    </n-card>

    <n-card size="small" title="数据权限" content-style="height: 100%;overflow-y: scroll;">
      <span>页面级别的权限，控制页面是否对角色可见</span>
      <premissTree></premissTree>
    </n-card>

  </div>
</template>

<script lang="ts" setup>
import { NCard } from "naive-ui";
import roleList from "./list.vue";
import premissTree from "./premisss_tree.vue";
</script>