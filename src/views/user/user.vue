<template>
  <n-card style="margin-bottom: 16px;height: 100%;">
    <template #header>

      <div style="display: flex;align-items: center;">
        <span style="display: flex;align-items: center;margin-right: 40px;">
          <n-icon size="26" style="margin-right: 10px;margin-bottom: 2px;">
            <component :is="Guest24Regular" />
          </n-icon>
          <span style="font-weight: bold;">账户管理</span>
        </span>
        <span style="font-size: 14px;color: #aaa;">实验室员工信息管理</span>
      </div>

    </template>
    <template #header-extra>
      <n-icon size="20" style="margin-bottom: 2px;">
        <component :is="CommentError24Regular" />
      </n-icon>
    </template>

    <n-tabs type="line" animated style="height: 100%;display: flex;flex-direction: column;" pane-wrapper-style="flex: 1;"
      pane-style="height:100%;display: flex;flex-direction: column;">
      <n-tab-pane name="用户基本信息" tab="用户列表" display-directive="show:lazy">
        <list />

      </n-tab-pane>
      <n-tab-pane name="用户详细信息" tab="用户信息" display-directive="show:lazy">
        <formTab />
      </n-tab-pane>
      <n-tab-pane name="组织架构图" tab="组织图" display-directive="show:lazy">
        七里香
      </n-tab-pane>
    </n-tabs>
    <div style="position: absolute;top: 0;right: 0;opacity: .8;height: 110px;overflow: hidden;">


      <img width="400" style="transform: rotate(10deg);" src="../../svg/undraw_online_everywhere_re_n3lr.svg" />
    </div>
  </n-card>
</template>


<script lang="ts" setup>
import { Guest24Regular, CommentError24Regular } from '@vicons/fluent';

import { NCard, NTabs, NTabPane, NIcon } from 'naive-ui'
import list from "./tabs/list/index.vue";
import formTab from "./tabs/form/index.vue";



</script>

<style scoped></style>