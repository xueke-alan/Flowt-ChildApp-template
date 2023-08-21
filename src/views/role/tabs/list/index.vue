<template>
  <!-- <headerBar></headerBar> -->
  <div style="display: flex;height: 100%; overflow: hidden;">


    <n-card size="small" style="flex: 1;" content-style="height: 100%;overflow-y: hidden;padding-right:2px">
      <template #header>
        <span>角色 / 组</span>
        <span style="color: #aaa;font-size: 14px;margin-left: 20px;">基于分组概念</span>
      </template>
      <n-scrollbar style="height: 100%;padding-right: 14px;" trigger="none">
        <roleList></roleList>
      </n-scrollbar>
    </n-card>



    <n-layout style="flex: 2;">
      <n-layout-content content-style="padding-left:12px;">
        <n-card size="small" title="可靠性组 测试工程师" content-style="height: 100%;overflow-y: scroll;">
          <div>可靠性组 继承至可靠性组</div>
          <div>测试工程师</div>

        </n-card>
      </n-layout-content>
      <n-layout-content content-style="padding: 12px 0 0 12px;">
        <div style="display: flex;gap: 12px;">
          <n-card size="small" title="功能操作权限" content-style="height: 100%;overflow-y: scroll;">
            <span>页面级别的权限，控制页面是否对角色可见</span>
            <premissTree></premissTree>
          </n-card>

          <n-card size="small" title="数据权限" content-style="height: 100%;overflow-y: scroll;">
            <span>页面级别的权限，控制页面是否对角色可见</span>
            <premissTree></premissTree>
          </n-card>
        </div>

      </n-layout-content>
    </n-layout>


  </div>
</template>

<script lang="ts" setup>
import { NCard, NScrollbar, NLayout, NLayoutHeader, NLayoutContent } from "naive-ui";
import roleList from "./list.vue";
import premissTree from "./premisss_tree.vue";
</script>