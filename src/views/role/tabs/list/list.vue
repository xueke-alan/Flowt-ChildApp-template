<template>
  <n-tree block-line :data="data" :default-expanded-keys="defaultExpandedKeys" selectable :checkable="false"
    :default-expand-all="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NTree } from "naive-ui";

import { TreeOption } from 'naive-ui'

const data: TreeOption[] = [
  {
    key: 0,
    label: "超级管理员",
    checkboxDisabled: true,
  },
  {
    key: 1,
    label: "测试主管",
    checkboxDisabled: true,

    children: [
      {
        key: 11,
        label: "物理组 主管",
        checkboxDisabled: true,
      },
      {
        key: 22,
        label: "老化组 主管",
        checkboxDisabled: true,
      },
      {
        key: 33,
        label: "可靠性组 主管",
        checkboxDisabled: true,
      }
    ]
  },
  {
    key: 2,
    label: "测试工程师",
    checkboxDisabled: true,
  },
  {
    key: 3,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 4,
    label: "技术支持",
    checkboxDisabled: true,
  }
]
const defaultExpandedKeys = ref(['40', '41'])


</script>