<template>
  <n-tree block-line :data="data" :default-expanded-keys="defaultExpandedKeys" checkable expand-on-click selectable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NTree } from "naive-ui";

import { TreeOption } from 'naive-ui'

const data: TreeOption[] = [
  {
    key: 1,
    label: "路由权限",
    // checkboxDisabled: 1,
  }
]
const defaultExpandedKeys = ref(['40', '41'])


</script>